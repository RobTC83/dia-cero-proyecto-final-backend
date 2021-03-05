const Users         = require('../models/user.model')
const mongoose      = require('mongoose')
const bcrypt        = require('bcrypt')
const saltRounds    = 10



exports.registroUsuario = async (req,res,next) => {

    const {username, email, password} = req.body

    //validaciones intermedias


         if (!username || !email || !password) {
            res.status(500).json({
                errorMessage: 'No te olvides de llenar los tres campos'
            })
        }
    
        const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            if (!regexPassword.test(password)) {
                res.status(500).json({
                    errorMessage: 'Tu contraseña debe tener al menos 6 caracteres, al menos un número, una letra mayúscula y una minúscula.' 
                })
                }

        const regexEmail = /^\S+@\S+\.\S+$/;
            if (!regexEmail.test(email)) {
                res.status(500).json({
                    errorMessage: 'Proporciona una dirección de correo electrónico válida'
                })
            }

    bcrypt
        .genSalt(saltRounds)
        .then((salt) => {
            bcrypt.hash(password,salt)})
        .then((password) => {
            return Users.create({
                username, 
                email, 
                passwordHash,
                profilePictureUrl:"https://res.cloudinary.com/robtc/image/upload/v1613519785/preguntas..._3_ojhsyy.png",
                incomeItem:[],
                budgetItem:[],
            })
        })
        
        .then((user)=>{
            console.log('Newly created user is: ',user)
            res.redirect('/registro-exitoso')
        })



        .catch((error)=>{
           if (error instanceof mongoose.Error.ValidationError) {
               res.status(500).json({errorMessage: error.message})
           } 
           else if (error.code === 11000) {
               res.status(500).json({
                   errorMessage: "El nombre de usuario y correo electrónico deben ser únicos"
               })
           } else {
               next(error)
           }
        })

    



}


exports.iniciarSesion = async (req,res) => {

}


exports.editarPerfil = async (req,res)=> {

}