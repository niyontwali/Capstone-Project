const about = (req, res) => {
    res.status(304).render('about');

    // res.status(200).json({
    //   message: "This is the about page"
    // })
  }

 
module.exports = about;