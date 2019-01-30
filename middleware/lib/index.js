const logger = (req, res, next) => {
    console.log(`
    METHOD: ${req.method}
    URL: ${req.path}
    HOST: ${req.hostname}
    PARAMS: ${JSON.stringify(req.params)}
    `)

    next()
}

module.exports = {logger}