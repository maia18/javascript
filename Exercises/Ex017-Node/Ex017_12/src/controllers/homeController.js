exports.initialPage = (req, res) => {
   res.render('index');
};

exports.handlePost = (req, res) => {
    res.send('Hey, I am your new route of POST')
}