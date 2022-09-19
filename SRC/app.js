const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./Routes/index.js');

//escuchar servidor
app.set('port', process.env.PORT || 3000);

//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//Routes
app.use("/",indexRoutes);

app.listen(app.get('port'),()=> {
    console.log('servidor operando',app.get('port'))
});