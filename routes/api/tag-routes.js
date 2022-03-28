const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
      include: {
        model: Product
      }    
  })
  .then(function(productTag) {
    res.json(productTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product
      }
  })
  .then(function(productTag) {
    res.json(productTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


  // create a new tag
  router.post('/', (req, res) => {
    Tag.create({
      tag_name: req.body.tag_name
    })
    .then(function(productTag) {
      res.json(productTag)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // update a tag's name by its `id` value
  router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function(productTag) {
      res.json(productTag)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  

  // delete on tag by its `id` value
  router.delete('/:id', (req, res) => {
    Tag.destroy({ 
      where: {
        id: req.params.id
      }
    })
    .then(function(productTag) {
      res.json(productTag)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
