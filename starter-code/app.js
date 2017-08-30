const express = require('express');
const app = express();

app.set('views','htmls');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/',(request,response, next) =>{
  response.render('home.ejs');
});

app.get('/about',(request,response, next) =>{
  response.render('about-page.ejs');
});

app.get('/photos',(request,response, next) =>{
  response.render('photo-gallery.ejs');
});

app.listen(8000);
