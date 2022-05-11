var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '11972103303',
      address: {
        zipcode: '04249100',
        street: 'Rua Salvador Pedroso',
        number: '100',
        complement: 'Ap. 99',
        district: 'Sacomã',
        city_state: 'São Paulo/SP'
      },
      deliver_method: 'Moto',
      cnh: 'images/cnh-digital.jpg'
    }

    return data
  }
}