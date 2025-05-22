const { major } = require('../models')

module.exports = (app) => {
    const router = app.Router()

    router.get('', async(req, res) => {
        const majorData = await major.findAll()

        return res.status(200).json(majorData)
    })
    
    return router
}
