const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
        return res.send('hello there');
});

app.get('/login', (req, res) => {
        return res.send('You are visiting a login route');
});
app.get('/signup', (req, res) => {
        return res.send('You are visiting a signup route');
});

app.listen(port, () => {
        console.log("Server is up and running...")
});