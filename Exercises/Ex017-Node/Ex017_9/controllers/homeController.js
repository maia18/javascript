exports.initialPage = (req, res) => {
    res.send(
        '<form action="/" method="POST">Client Name: <input type="text" name="name_"><button>Send</button></form>'
    );
};

exports.handlePost = (req, res) => {
    res.send('Hey, I am your new route of POST')
}