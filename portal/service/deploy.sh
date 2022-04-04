#Build and deploy client to cloud run (run script with your GCP Project Id as parameter)
# gcloud config set project $1
export PROJECT_ID=$(gcloud config get-value project)

npm run build
#gcloud builds submit --tag eu.gcr.io/$1/apigee-portal
docker build -t local/apigee-portal .
docker tag local/apigee-portal eu.gcr.io/$PROJECT_ID/apigee-portal
docker push eu.gcr.io/$PROJECT_ID/apigee-portal

gcloud run deploy apigee-portal --image eu.gcr.io/$PROJECT_ID/apigee-portal --platform managed --project $PROJECT_ID \
  --region europe-west1 --allow-unauthenticated
