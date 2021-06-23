const database = require('../models')
const { InternalServerError } = require('./erros');


module.exports = {
  buscaPorId: id => {
    return new Promise((resolve, reject) => {
        const usuario = await database.Series.findOne({
            where: {
              id: Number(id)
            }
          })
        (erro, usuario) => {
          if (erro) {
            return reject('Não foi possível encontrar o usuário!');
          }

          return resolve(usuario);
        }
      );
    });
  },
}