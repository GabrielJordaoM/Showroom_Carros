import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;
  @service router;

  erro = '';

  realizarLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const senha = form.senha.value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuario) {
      this.session.login(usuario);
      this.router.transitionTo('index');
    } else {
      this.set('erro', 'E-mail ou senha incorretos');
    }
  };
}
