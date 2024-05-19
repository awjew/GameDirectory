require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();


//middleware. this will once everytime someone sent a request to the api
app.use(express.json())
app.use((req, res, next) => {
    console.log('New API Request');
    next();
})


//routes

app.get('/', (req, res) => {
    res.json({
        'body': 'nice',
    });
});



//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log('connected to mongoose')
    app.listen(process.env.PORT, () => { 
        console.log("test server!!" + process.env.PORT.toString());
});
}).catch((errror) => {
    console.log(errror);
 }); 


