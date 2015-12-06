import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({
    shouts: [
      'Hello World!',
      'This is React and Webpack...',
      'They make development fun',
      'Another shout'
    ]
  });
});

app.get('/*', (req, res) => {
  console.log(req, res);
});

app.listen(8080, (err) => {
  if (err)
    return console.log(err);
  console.log('running on localhost:8080');
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('running on localhost:3000, too');
});