This project is a demo of aws amplify and graphql 
A note management App 

An overview presentation on Graphql and AWS Amplify [slide](https://docs.google.com/presentation/d/1NeHLap4_IGZGF0EGUxDs_07ru1ui_BbsMQMS3D8lxhs/edit?usp=sharing)

## Quick atart with amplify and appsync 

### `amplify installation` 

```
npm install -g @aws-amplify/cli
amplify configure
```

### `Create new react App ` 
```
npx create-react-app amplify-garphql-demo 
&& cd amplify-garphql-demo

npm install aws-amplify @aws-amplify/ui-react

```

### `Initialize new backend `
```
amplify init
```

* creates a directory called amplify that stores our backend definition. 
creates a file called aws-exports.js it that holds all the configuration for the services we create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services.

### `Add API & DB ( DynamoDB && graphql)`
```
amplify add api
```
* Creates schema file on backend folder which specify our schema 
We will use the @modle directive which defines the basic CRUD operation and the necessary resolvers 


### `Deploying the API` 
```
amplify push 
```

### `Add authentication service (amazon cognito) `

```
amplify add auth
```


### `Deploying authentication`
```
amplify push
```


### `Deploy and host app`

```
amplify add hosting
```


### `Publish the app`
```
amplify publish

```

