const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
var nodemailer = require('nodemailer');


app.use(express.urlencoded({extended:true}));

app.use(bodyparser.json());

app.use(express.json());

app.use(cors());

app.post('/mail', (req,res) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let mail = req.body.LeadEmail;
    let name = req.body.LeadName;
    let status = req.body.LeadStatus

    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sarithsajeev@gmail.com',
            pass:'gwedlwqmwgcahqef'
        },
        secure:true
    });

    var mailOptions = {
        from:'sarithsajeev@gmail.com',
        to:mail,
        subject:'Enquiry Status',
        text: `Hello ${name} ,
            Your status has been changed to ${status}.
            Thank you for your interest in Geo Infotech.
            We will come back to you soon.`
    };

    transporter.sendMail(mailOptions, async function(error,info){
        if(error){
            console.log(error);
            res.end();
        }else {
            res.send('Email sent: ' + info.response);
        }
    });

})

app.post('/test', (req,res) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    let mail = req.body.LeadEmail;
    let name = req.body.LeadName;
    let status = req.body.LeadStatus

    console.log( mail + name + status);

})

app.get('', function(req,res){
    res.send("Working");
})

app.listen(5000, () => {console.log("server ready at 5000")});