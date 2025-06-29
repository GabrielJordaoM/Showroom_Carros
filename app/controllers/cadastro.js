import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CadastroController extends Controller {
  @service router;

  erro = '';
  sucesso = '';

  realizarCadastro = (event) => {
    event.preventDefault();

    const form = event.target;
    const nome = form.nome.value;
    const email = form.email.value;
    const senha = form.senha.value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (usuarios.find((u) => u.email === email)) {
      this.set('erro', 'Este e-mail já está cadastrado');
      return;
    }

    const novo = { nome, email, senha };
    usuarios.push(novo);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.setProperties({
      erro: '',
      sucesso: 'Cadastro realizado com sucesso! Vá para o login.',
    });

    form.reset();
  };
}
