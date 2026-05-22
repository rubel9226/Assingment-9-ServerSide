const logger = (req, res, next) => {
    try {
        console.log(`${req.method} | ${req.url}`)
        next();
    } catch (error) {
        next(error)
    }
}


module.exports = { logger }