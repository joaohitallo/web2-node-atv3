const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const Usuario= require('../models')


//const Usuario = require('./models/usuarios')
const {InvalidArgumentError} = require('../erros')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const database = require('../models')

function verificaUsuario(usuario){
    if (!usuario) {
        throw new InvalidArgumentError('Não existe usuário com esse email')
    }
}

async function verificaSenha(senha, senhaHash){
    const senhaValida = await bcrypt.compare(senha, senhaHash)
    if (!senhaValida) {
        throw new InvalidArgumentError('Email ou senha inválidos')
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) =>{
        try {
            const usuario = await database.Usuarios.findOne({
                where: {
                  email: email
                }
              })
            verificaUsuario(usuario)
            verificaSenha(senha, usuario.senhaHash)
            done(null, usuario)
            
        } catch (erro) {
            done(erro)
        }
    })
)

//    passport.use(
//        new BearerStrategy(
//            async (token, done) => {
//                try {
//                    const payload = jwt.verify(token, process.env.CHAVE_JWT)
//                    const usuario = await database.Usuarios.findOne({
//                        where: {
//                            id: Number(payload.id)
//                        }
//                    })
//                    done(null, usuario)
//                } catch (erro) {
//                    done(erro)
//                }
//            }
//        )
//    )