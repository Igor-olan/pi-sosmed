// const { router } = require('express')
const post_ctrl = require('../controllers/post_ctrl')
const { authenticateJWT } = require('../middleware/authMiddleware')
const { body } = require('express-validator')

module.exports = (app) => {
    const router = app.Router()

    router.get('/list', authenticateJWT, post_ctrl.list)
    
    router.post('/create', authenticateJWT, [
        body('content_text').notEmpty(),
    ], post_ctrl.save)


    
    
    return router
}
