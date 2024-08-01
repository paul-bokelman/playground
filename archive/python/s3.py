import boto3
from mypy_boto3_s3 import S3Client

session = boto3.Session(
    aws_access_key_id='',
    aws_secret_access_key=''
)

s3: S3Client = session.client('s3')

def upload_to_s3(file_name, bucket, object_name):
    s3.upload_file(file_name, bucket, object_name)


upload_to_s3('out/s3/test.txt', 'bucket_name', 'test.txt')