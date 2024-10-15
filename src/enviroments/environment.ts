export const environment = {
    production: false,
    authorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id : 'client',
    redirect_uri: 'http://127.0.0.1:4200/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    code_challenge: 'Bge2WrNdTLwSJjX-KPXm3P3H_uagaqSyyale8mT6qWs',
    code_verifier: 'GCteQfl10yhpP8rQX1BGBHbiUmjt5GXyPbbcCeRsSIR'
  };