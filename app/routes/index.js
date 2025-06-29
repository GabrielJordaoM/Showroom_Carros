import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, nome: 'Civic', marca: 'Honda', ano: 2022, imagem: '/img/civic.png' },
      { id: 2, nome: 'Corolla', marca: 'Toyota', ano: 2023, imagem: '/img/corolla.png' },
      { id: 3, nome: 'Onix', marca: 'Chevrolet', ano: 2021, imagem: '/img/onix.png' },
      { id: 4, nome: 'HB20', marca: 'Hyundai', ano: 2020, imagem: '/img/hb20.png' },
      { id: 5, nome: 'Gol', marca: 'Volkswagen', ano: 2019, imagem: '/img/gol.png' },
      { id: 6, nome: 'Uno', marca: 'Fiat', ano: 2018, imagem: '/img/uno.png' },
      { id: 7, nome: 'Ka', marca: 'Ford', ano: 2020, imagem: '/img/ka.png' },
      { id: 8, nome: 'Pulse', marca: 'Fiat', ano: 2024, imagem: '/img/pulse.png' }
    ];
  }
}
