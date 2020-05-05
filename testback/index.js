const express = require("express");
const app = express();
const port = 8000;

const admin =(req,res)=>{
        return res.send('Admin Dashboard')
};
const isAdmin=(req,res,next)=>{
        console.log('isAdmin is running.');
        next();
};
const isLoggedIn=(req,res,next)=>{
        console.log('isLoggedIn is true');
        next();
}

app.get('/admin',isLoggedIn,isAdmin,admin);

app.get('/', (req, res) => {
        return res.send('Hello there');
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