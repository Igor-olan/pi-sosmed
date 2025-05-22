// const { router } = require('express')
const comment_ctrl = require('../controllers/comment_ctrl')
const { authenticateJWT } = require('../middleware/authMiddleware')
const { body } = require('express-validator')

module.exports = (app) => {
    const router = app.Router()

    router.get('/list', authenticateJWT, comment_ctrl.list)
    
    router.post('/create', authenticateJWT, [
        body('content_comment_text').notEmpty(),
    ], comment_ctrl.save)

    return router
}
