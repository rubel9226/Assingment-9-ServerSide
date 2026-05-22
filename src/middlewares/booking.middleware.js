const createHttpError = require("http-errors");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

const logger = (req, res, next) => {
    try {
        console.log(`${req.method} | ${req.url}`)
        next();
    } catch (error) {
        next(error)
    }
}

const verifyToken =async (req, res, next) => {
    try {
        const { authorization:token } = req.headers;

        if(!token){
            throw createHttpError(401, 'Unauthorize')
        }
        const JWKS = createRemoteJWKSet(
            // new URL(`${process.env.CLIENT_URL}/api/auth/jwks`)
            new URL(`http://localhost:3000/api/auth/jwks`)
        )
        const { payload } = await jwtVerify(token, JWKS)
        req.user = payload;

        next();
    } catch (error) {
        
        console.log(error.message);
        next(error);
    }
}


module.exports = { logger, verifyToken }