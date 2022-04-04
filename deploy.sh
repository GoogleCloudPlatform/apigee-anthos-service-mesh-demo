PROJECT=$(gcloud config get-value project)

echo "Enabling APIs..."
gcloud services enable compute.googleapis.com

echo "Create configmap for the proxyservice"
kubectl create configmap proxyconfig --from-file=kubernetes-manifests/config -n istio-ingress

echo "Deploy the istio gateway and proxyservice"
kubectl apply -f kubernetes-manifests/istio-gateway.yaml -n istio-ingress
kubectl apply -f kubernetes-manifests/proxy-service.yaml -n istio-ingress

RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet)
if [ -z "$RUNTIME_IP" ]
then
echo "Provisioning Apigee..."
curl -L https://raw.githubusercontent.com/apigee/devrel/main/tools/apigee-x-trial-provision/apigee-x-trial-provision.sh | bash -
fi

echo "Creating OpenAPI spec with correct server URL..."
RUNTIME_IP=$(gcloud compute addresses describe lb-ipv4-vip-1 --format="get(address)" --global --project "$PROJECT" --quiet) 
cp specs/productservice.yaml portal/client/productservice.yaml
sed -i "s@{SERVER_URL}@https://eval-group.$RUNTIME_IP.nip.io@" portal/client/productservice.yaml

echo "Build and deploy portal..."
gcloud builds submit --tag eu.gcr.io/$PROJECT/apigee-service-portal
gcloud run deploy apigee-service-portal --image eu.gcr.io/$PROJECT/apigee-service-portal --platform managed --project $PROJECT \
  --region europe-west1 --allow-unauthenticated
