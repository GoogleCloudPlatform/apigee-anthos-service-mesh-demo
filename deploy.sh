# Create the configmap
./kubernetes-manifests/createconfigmap.sh
# Deploy the istio-gateway rules and the proxy-service
kubectl apply -f kubernetes-manifests/istio-gateway.yaml
kubectl apply -f kubernetes-manifests/proxy-service.yaml

# Build and deploy portal
PROJECT=$(gcloud config get-value project)
gcloud builds submit --tag eu.gcr.io/$PROJECT/apigee-service-portal
gcloud run deploy apigee-service-portal --image eu.gcr.io/$PROJECT/apigee-service-portal --platform managed --project $PROJECT \
  --region europe-west1 --allow-unauthenticated

# TODO deploy Apigee proxy