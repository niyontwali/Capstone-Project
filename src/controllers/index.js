const index = (req, res) => {
    res.status(200).json({"message": "Welcome to the Dashboard!"});
    // res.render('Home/index')
  }


  module.exports = index;