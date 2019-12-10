const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('homepage');
});

app.get('/homepage', (req, res) =>{
    res.render('homepage');
});


app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/table', (req, res) =>{
    res.render('table');
});

app.get('/map', (req, res) => {
    res.render('map', {qs: req.query});
});


app.post('/map', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('map_result', {data: req.body});
});


  
  


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
