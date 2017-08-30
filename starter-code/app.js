const express = require('express');

const app = express();

app.set('views','htmls');

app.set('view engine','ejs');

app.use(express.static('public'));

// home page
app.get('/', (request,response,next) => {

  response.render('home.ejs');

});


//about page
app.get('/about', (request, response, next) => {

  response.render('about.ejs');

});

// gallery
app.get('/gallery', (request, response, next) => {

  response.render('gallery.ejs');

});

app.listen(3000);
