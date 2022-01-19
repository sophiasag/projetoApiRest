const ValorNaoSuportado = require('./erros/ValorNaoSuportado')

class Serializador {
  json(dados) {
    return JSON.stringify(dados)
  }

  serializar(dados) {
    if (this.contentType === 'aplication/json') {
      return this.json(dados)
    }

    throw new ValorNaoSuportado(this.contentType)
  }
}

module.exports = {
  Serializador: Serializador,
  formatosAceitos: ['aplication/json']
}
