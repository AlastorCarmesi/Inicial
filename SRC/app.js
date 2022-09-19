const express = require('express');
const app = express();

//escuchar servidor
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=> {
    console.log('servidor operando',app.get('port'))
});