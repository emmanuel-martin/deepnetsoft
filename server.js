require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Api is running'));

const jwt = require('jsonwebtoken');
app.use(express.json());
app.post('/login', AuthorizeToken, (req, res) => {

    const username = req.body.username;
    
    const user = {user: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken})
})


function AuthorizeToken(req, res, next) {
    const AuthHeader = req.headers['authorization'];
    const token = AuthHeader && AuthHeader.split(' ')[1]
    if(token == null ){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
