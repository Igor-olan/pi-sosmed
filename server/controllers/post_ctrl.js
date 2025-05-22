const { validationResult } = require('express-validator');
const { post, user, comment } = require('../models');
const self = {}

self.list = async (_,res) => {
    let data = await post.findAll({
        include: [
            {
            model: user,
            attributes: ['username']
        },
            {
            model: comment,
            include: [{
                model: user,
                attributes: ['username']
            }],
        }
    ]
    })
    res.status(200).json({
        message: 'post found',
        data: data
    })
}

self.save = async (req, res) => {
    let errors = validationResult(req)
    let data = await post.findAll({})
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    const {
        content_text
    } = req.body

    await post.create({
        content_text: content_text,
        private: "false",
        user_id: req?.user?.data?.id
    })

    res.status(201).send({ message:'post success', data: data})
}

module.exports = self