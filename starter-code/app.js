const express = require('express');

const app = express();

app.set('views', 'html');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.render('index.ejs');
});

app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});

app.get('/photo-gallery', (request, response, next) => {
  response.render('photo-gallery.ejs');
});

app.listen(3000);
