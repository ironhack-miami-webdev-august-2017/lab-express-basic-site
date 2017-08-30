const express = require('express');
const app = express();

app.set('views', 'views');
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/home', (request, response, next) => {
  response.render('home.ejs');
});

app.get('/about', (request, response, next) => {
  response.render('about-page.ejs');
});

app.listen(3000);

app.get('/photos', (request, response, next) => {
  response.render('image-page.ejs');
});
