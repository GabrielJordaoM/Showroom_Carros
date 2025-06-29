export default class CarrosRoute extends Route {
  model() {
    return [
      { id: 1, nome: 'Civic', marca: 'Honda', ano: 2022 },
      { id: 2, nome: 'Corolla', marca: 'Toyota', ano: 2023 },
      { id: 3, nome: 'Onix', marca: 'Chevrolet', ano: 2021 },
      { id: 4, nome: 'HB20', marca: 'Hyundai', ano: 2020 },
      { id: 5, nome: 'Gol', marca: 'Volkswagen', ano: 2019 },
      { id: 6, nome: 'Uno', marca: 'Fiat', ano: 2018 },
      { id: 7, nome: 'Ka', marca: 'Ford', ano: 2020 },
      { id: 8, nome: 'Pulse', marca: 'Fiat', ano: 2024 }
    ];
  }
}
