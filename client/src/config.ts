// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '2dn9xrtl96'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-2.amazonaws.com/dev`

const mode = process.env.NODE_ENV

// callbackUrl: 'http://my-cloud-dev-s3.s3-website-us-west-2.amazonaws.com/callback'
export const authConfig =
  mode === 'development'
    ? {
        // TODO: Create an Auth0 application and copy values from it into this map
        domain: 'bbxit.au.auth0.com', // Auth0 domain
        clientId: 'tpR1o6tgQ36fokctTUjAiOqkZjuanScu', // Auth0 client id
        callbackUrl: 'http://localhost:3000/callback'
      }
    : {
        // TODO: Create an Auth0 application and copy values from it into this map
        domain: 'bbxit.au.auth0.com', // Auth0 domain
        clientId: 'tpR1o6tgQ36fokctTUjAiOqkZjuanScu', // Auth0 client id
        callbackUrl: 'http://d2meud1qv9x340.cloudfront.net'
      }
