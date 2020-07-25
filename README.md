# Taskify - A Serverless ToDo Application

This project is the React-based front-end component of the Taskify Serverless Application. It works in conjunction with the taskify-api project also found on Github.

## Getting Started
Download all dependencies. In the root of this project run
```
npm install
```

You can then start the project locally via
```
npm start
```

However, the app will have no functionality before a few setup tasks are performed.

### 1. Google Auth
In order to be able to CRUD 'Tasks', you must login. To login, you need a working Google OAuth2 client Id. To do this you must create an app on console.developers.google.com and create an OAuth client. There are plenty of tutorials online on how to do this. Save the client ID and paste that into src/components/GoogleAuth.js replacing the text 'INSERT_GOOGLE_AUTH_CLIENT_ID_HERE'


### 2. API Gateway
In order to be able to CRUD 'Tasks', you need an appropriate address to send your requests to. After your API has been deployed on API Gateway, paste the invocation URL into src/apis/tasks.js replace the text 'INSERT_API_GATEWAY_URL_HERE'.

### 3. That's it!
You should now have successfully connected your api to this front-end React Application. The app should be working perfectly on localhost and you can do as you please with it.

### 4. Host on S3 (Optional)
If you want others to benefit, you can publicly host on S3. Create an S3 bucket deigned for static web hosting. Again there are plenty of tutorials online how to do this. Replace 's3_name' under package.json in the scripts -> deploy section with your s3 bucket name. You can then use
```
yarn build && yarn deploy
```
to deploy your application to S3.
