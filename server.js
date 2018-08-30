const express = require('express');
const path =  require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('_public'));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/_public/index.html')) )
app.listen(port, () => console.log('Express listening on port:', port));
