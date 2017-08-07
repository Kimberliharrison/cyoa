import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'cya.auth0.com',
    clientID: 'nVP02639Zgv6ZzRUtb_wdKlYRWviTLcU',
    redirectUri: 'http://localhost:3000',
    audience: 'https://cya.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}