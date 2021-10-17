var express=require('express');

var app=express();


app.listen('3000',()=>{
    console.log('port is running 3000');
})

app.use(express.json())

app.get('/health',async(req,res)=>{
const accountSid = 'ACe6dbf3e8bc349970e6f511124cf4df9e'; 
const authToken = '547026c626a2df07fface504c62a265e'; 
const client = require('twilio')(accountSid, authToken); 
 
const res1=await client.messages 
      .create({ 
         body: 'jaffa', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+918885556918' 
       }) 
      

res.status(200).send({status:res1.status})
})




