 # Secure URL2

  Example Cloud Functions code to illustrate how to generate a secure URL link to Cloud Storage objects.
   The URL is valid only for the period of time specified in the function.

# API Library


Ensure the following API is enabled on Google Cloud Platform

Identity and Access Management (IAM) API - Google
Service Name: iam.googleapis.com

In IAM assign the following permission(S):
  iam.serviceAccount.signBlob - this permission in IAM is called Service Account Token Creator
