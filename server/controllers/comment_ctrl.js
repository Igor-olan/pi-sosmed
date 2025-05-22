const { validationResult } = require('express-validator');
const { comment, user } = require('../models')
const self = {}

self.list = async (_,res) => {
    let data = await comment.findAll({
        include: [{
            model: user,
            attributes: ['username']
        }]
    })
    res.status(200).json({
        message: 'comment found',
        data: data
    })
}

self.save = async (req, res) => {
    let errors = validationResult(req)
    let data = await comment.findAll({
        
    })
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    const {
        content_comment_text,
    } = req.body

    await comment.create({
        content_comment_text: content_comment_text,
        user_id: req?.user?.data?.id,
        post_id: req?.post?.data?.id
    })

    res.status(201).send({ message:'comment success', data: data})
}

module.exports = self