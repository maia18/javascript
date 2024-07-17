const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { 
            extended: true
         }
    )
);

app.get('/', (req, res) => {
    res.send(
        '<form action="/" method="POST">Client Name: <input type="text" name="name_"><button>Send</button></form>'
    );
});

app.get('/tests/:idUsers?/:parameters?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send( `I received the form: ${req.body.name_}`)
});

app.listen(3000, () => {
    console.log('Access http://localhost:3000')
    console.log('Server executing on 3000 door')
});