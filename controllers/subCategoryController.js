const {SubCategory} = require('../models/models')
const ApiError = require('../error/ApiError');

class SubCategoryController {
  async create(req, res) {
    const {title, categoryId} = req.body
    const sub = await SubCategory.create({title, categoryId})
    return res.json(sub)
  }

  async getAll(req, res) {
    const sub = await SubCategory.findAll()
    return res.json(sub)
  }

  async getOne(req, res) {
    const {id} = req.params
    const sub = await SubCategory.findOne({where: {id}})
    res.json(sub)
  }
}

module.exports = new SubCategoryController()
