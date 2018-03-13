
const express = require ('express');
const app = express();
var multer = require('multer');
const colors = ['red', 'yellow', 'blue']

app.set('view engine','pug'); // set up pug 

app.get('/', (request, response) => {    // get 
response.render('index');
});
app.use(express.static(__dirname + '/public'));  

app.get('/sucessStories', (request, response) => {
response.render('sucessStories');
});

app.get('/Music',(request,response) => {
response.render('Music');
});

app.use('/Music',(request, response, next)=>{ // need to work on this 
console.log('Music');
next();
});

app.get('/HappyMoments',(request,response) => {
response.render('HappyMoments');
});

app.get('/Smile',(request,response) => {
response.render('Smile');
});

app.get('/HappyQuotes',(request,response) => {
response.render('HappyQuotes');
});

app.get('/BrainPuzzels',(request,response) => {
response.render('BrainPuzzels');
});

app.get('/BreathInOut',(request,response) => {
response.render('BreathInOut');
});

app.listen(3000);