export const environment = {
  production: false,
  authorize_uri: 'http://localhost:9000/oauth2/authorize?',
  client_id : 'client',
  redirect_uri: 'http://127.0.0.1:4200/authorized',
  scope: 'openid profile',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  code_challenge: 'iHq_9W3BxKS4fnh2wloUSd9CQPDMfrQTgLIkUv1TlvA',
  code_verifier: 'ueDIn6Ab9pgeVZedqfCMiN4UjfdOwBWPKmjpCgfn3jX',
  token_url: 'http://localhost:9000/oauth2/token',
  grant_type: 'authorization_code',
  resource_url: 'http://localhost:8080/resource/',
  logout_url: 'http://localhost:9000/logout',
  


  };


