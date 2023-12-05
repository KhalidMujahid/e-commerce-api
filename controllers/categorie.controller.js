const Categorie = require("../models/Categorie");

// @Des: Add Categorie
// @Method: POST
// @Access: Public
module.exports.addCategorie = async (req, res, next) => {
  try {
    if (!req.body.cat) return res.status(204).json({error: 'Bad request'});
    
    await Categorie.create({
      name: req.body.cat
    })
      .then((data) => res.status(201).send(data))
      .catch((error) => console.log(error));
    
  } catch (error) {
    next(error);
  }
};

// @Des: Remove Categorie
// @Method: DELETE
// @Access: Public
module.exports.removeCategorie = async (req, res, next) => {
  try {
    if (!req.body.id) return res.status(204).json({error: 'Bad request'});
    
    await Categorie.findByIdAndDelete(req.body.id)
      .then((data) => res.status(200).send(data))
      .catch((error) => console.log(error));
  
  } catch (error) {
    next(error);
  }
};

module.exports.getByQuery = async (req,res,next) => {
    try{
      const { q } = req.query;
      const products = await Categorie.find({ product_cat: q });
      return res.status(200).send(products);

      // You can try the below code if you are interested in the first pull_request
      // return res.status(200).send(await Categorie.find({ product_cat: q }));
    } catch(error) {
      next(error);
    }
}

// @Des: Get all categories
// @Method: GET
// @Access: Public
module.exports.getCategorie = async (req, res, next) => {
  try {
    await Categorie.find()
      .then((data) => res.status(200).send(data))
      .catch((error) => console.log(error));
  } catch (error) {
    next(error);
  }
};
