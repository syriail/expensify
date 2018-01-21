const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', "public");
//For Heroku, it assigns the port automatically
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (request, response)=>{
    response.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, '127.0.0.1', ()=>{
    console.log('Express server is up');
});