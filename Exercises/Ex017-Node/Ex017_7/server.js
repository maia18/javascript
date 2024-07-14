const express = require('express');
const app = express();

// CRUD --> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT     DELETE

// http://meusite.con/ <-- GET --> Give the page /
// http://meusite.con/about <-- GET --> Give the page /about
// http://meusite.con/contact <-- GET --> Give the page /contact

app.get('/', (req, res) => {
    res.send('<form action="/" method="POST">Client Name: <input type="text" name="name_"><button>Send</button></form>');
});

app.post('/', (req, res) => {
    res.send('I received the form')
});

app.get('/contact', (req, res) => {
    res.send('Thanks for join on contact with us')
});

app.listen(3000, () => {
    console.log('Access http://localhost:3000')
    console.log('Server executing on 3000 door')
});