var express = require('express'),
   db = require('./models/index.js'),
   ejs = require('ejs'),
   bodyParser = require('body-parser'),
   blogAuthor = require('./models/blog_author.js').Author,
   blogPost = require('./models/blog_post.js').Post,
   app = express();
 
 
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded());
 //need to ask Elie exactly what this is for
 app.use(express.static(__dirname + '/public'));
 
 
 app.get('/blog', function (req, res) {
  res.render('index');
});
 
 app.get('/blog/bloglist', function (req, res){
  res.render('blog_list')
 });

app.post('/blog', function (req, res){
  
})
 

 app.listen(3000, function() {
   console.log('(port)Andre 3000');
 });