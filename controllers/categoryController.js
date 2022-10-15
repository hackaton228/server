const {Category} = require('../models/models')
const ApiError = require('../error/ApiError');

class CategoryController {
  async create(req, res) {
    const {title} = req.body
    const category = await Category.create({title})
    return res.json(category)
  }

  async getAll(req, res) {
    const category = await Category.findAll()
    return res.json(category)
  }

  async getOne(req, res) {
    const {id} = req.params
    const category = await Category.findOne({where: {id}})
    res.json(category)
  }
}

module.exports = new CategoryController()
