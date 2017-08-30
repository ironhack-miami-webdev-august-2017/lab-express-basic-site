//require express
const express = require('express');

//create express app object
const app = express();

//Tells express that views are in EJS files
app.set('view engine', 'ejs');
//Tell express that the HTML files are found in the "views" folder
app.set('views', 'views');

//Tell express that the static files are in the "public" folder
app.use(express.static('public'));

//create first route "home"
app.get('/', (request, response, next) => {
  response.render('home.ejs');
});

// "about-page" route
app.get('/about', (request, response, next) => {
  response.render('about-page.ejs');
});

//"photo-gallery" route
app.get('/gallery', (request, response, next) => {
  response.render('photo-gallery.ejs');
});




//tells express to start accepting a connection
app.listen(3000);
