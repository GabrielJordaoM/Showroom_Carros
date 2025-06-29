import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  setupController(controller) {
    super.setupController(...arguments);
    controller.setProperties({ email: '', senha: '', erro: '' });
  }
}
