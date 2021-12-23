## upload yml files to S3

$bucketUri = "s3://f1-cloudformation"
$bucketUrl = "https://f1-cloudformation.s3.ap-southeast-2.amazonaws.com"
$region = "ap-southeast-2"
$stackName = "f1"
$currentDirectory = (Get-Location).path

Write-Host "Existing files in $bucketUri..." -ForegroundColor Green  
aws s3 ls $bucketUri

Write-Host "Syncing yaml files..." -ForegroundColor Green
aws s3 cp $currentDirectory $bucketUri --recursive --exclude *.ps1 --include *.yml

Invoke-Expression -Command "aws cloudformation describe-stacks --stack-name $stackName --region $region"
if($LASTEXITCODE -ne 0)
{
    Write-Host "Stack doesnt exist. Creating...";
    aws cloudformation create-stack `
        --region $region `
        --stack-name $stackName `
        --template-url "$bucketUrl/_F1.yml" `
        --parameter ParameterKey=S3BucketUrl,ParameterValue=$bucketUrl `
        --capabilities CAPABILITY_IAM

}else{
    Write-Host "Updating stack...";
    aws cloudformation update-stack `
        --region $region `
        --stack-name $stackName `
        --template-url "$bucketUrl/_F1.yml" `
        --parameter ParameterKey=S3BucketUrl,ParameterValue=$bucketUrl `
        --capabilities CAPABILITY_IAM
}

    