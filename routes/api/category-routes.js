const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(function(products) {
    res.json(products)
  })
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
  .then(function(category) {
    res.json(category)
  })
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(function(category) {
    res.json(category)
  })
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(category) {
    res.json(category)
  })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy(
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(category) {
    res.json(category)
  })
});

module.exports = router;
