import Model, { attr } from '@ember-data/model';

export default class CarroModel extends Model {
  @attr('string') nome;
  @attr('string') marca;
  @attr('number') ano;
  @attr('string') imagem;
}
