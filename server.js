var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':
{
    title:'Article one | Pooja Gupta',
    heading:'Article one',
    date:'10 feb, 2017',
    content:`<p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                 This is the content for my first article. This is the content for my first article. This is the content for my first article.
                  This is the content for my first article. This is the content for my first article. This is the content for my first articl.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                 This is the content for my first article. This is the content for my first article. This is the content for my first article.
                  This is the content for my first article. This is the content for my first article. This is the content for my first articl.
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                 This is the content for my first article. This is the content for my first article. This is the content for my first article.
                  This is the content for my first article. This is the content for my first article. This is the content for my first articl.
            </p> `
},
'article-two':
{
    title:'Article two | Pooja Gupta',
    heading:'Article two',
    date:'11 feb, 2017',
    content:`<p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                 This is the content for my first article. This is the content for my first article. This is the content for my first article.
                  This is the content for my first article. This is the content for my first article. This is the content for my first articl.
            </p>`
            
    },
'article-three':
{
    title:'Article three | Pooja Gupta',
    heading:'Article three',
    date:'12 feb, 2017',
    content:`<p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article.
                 This is the content for my first article. This is the content for my first article. This is the content for my first article.
                  This is the content for my first article. This is the content for my first article. This is the content for my first articl.
            </p>`
    
}
};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.heading;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
         <link href="/ui/style.css" rel="stylesheet" />
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
            
        </style>
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
            
        </div>
        <hr>
        <h3>
        ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/article-two', function (req, res) {
  res.send('Article two requested and will be served here');
});

app.get('/article-three', function (req, res) {
  res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/pooja.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pooja.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
