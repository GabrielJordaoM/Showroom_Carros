import EmberRouter from '@ember/routing/router';
import config from 'showroom-carros/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('carros');
  this.route('login');
  this.route('cadastro');
  this.route('sobre');
});
