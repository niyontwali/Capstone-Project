const index = (req, res) => {
    // res.status(200).json({"message": "Welcome to the Dashboard!"});
    res.status(304).render('index')
    // res.render('../../index')
  }

 
  module.exports = index;