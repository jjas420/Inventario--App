export const environment = {
    production: false,
    authorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id : 'client',
    redirect_uri: 'http://127.0.0.1:4200/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    code_challenge: 'ee6h27oKnn9B_hFzhPv0rNtKe3XYjckYOhPG7r_omGY',
    code_verifier: 'RiMAmOHqFz0PbiWWdYzbNnMJQPqGh3z1ihu0Gk80l7Z'
  };