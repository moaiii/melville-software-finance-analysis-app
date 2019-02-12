#! /bin/bash

FUNCTION_NAME="melville-software-finance-json-csv-lambda"
LOCAL_ZIP="index.zip"
S3_LAMBDA_BUCKET="melville-software-finance-json-csv-lambda"

echo "Removing existing package"
rm -f $LOCAL_ZIP

# echo "Moving NPM Packages"
# mv node_modules/ node_modules_$ENV/

echo "Updating NPM Packages without dev dependency"
npm install

echo "Creating the package"
zip -q -r -X $LOCAL_ZIP index.js node_modules src response-object config.json

echo "deleting old code"
aws s3 rm s3://melville-software-finance-json-csv-lambda/index.zip --profile default

echo "Uploading to s3"
aws s3 cp index.zip s3://$S3_LAMBDA_BUCKET/index.zip --profile default

# echo "Updating Removing NPM Packages"
# rm -rf node_modules_dev/

S3_KEY_SOURCE="index.zip"

echo "Updating $FUNCTION_NAME code"
aws lambda update-function-code \
--profile default \
--function-name $FUNCTION_NAME \
--s3-bucket $S3_LAMBDA_BUCKET \
--s3-key $S3_KEY_SOURCE \