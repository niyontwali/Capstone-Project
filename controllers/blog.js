const blog = (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Blog Page',
        users
    });
}
//     // res.send('Hello World!')
//     const articles = [{
//         title: 'Article Title',
//         createdOn: new Date(),
//         description: 'Article description'
//     }]
//     res.status(201).render('blogPage/blog', { 
//         // articles: articles
//     })
// }
module.exports = blog;