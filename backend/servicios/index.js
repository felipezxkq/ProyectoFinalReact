'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
require('dotenv').config()

function createToken(user)
{

    const payload ={
        sub: user._id,
        activo: user.activo,
        iat: moment().unix(),
        exp:moment().add(14,'days').unix(), 
    }
   
   return jwt.encode(payload, process.env.SECRET_TOKEN)
}



module.exports = {
    createToken
    
};