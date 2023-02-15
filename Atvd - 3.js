const express = require('express');
const app = express(); 
app.get('/get', (request, response) => {response.send(“GETreq”);}); 
app.post('/post', (request, response) => {response.send(“POSTreq”);}); 
app.listen(8080, () => { console.log('Porta 8080'); });
