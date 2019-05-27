global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash').default;
const toJson = require('unsplash').toJson;
const express = require('express');

const unsplash = new Unsplash({
  applicatonId: config.get('APPLICATION_ID'),
  secret: config.get('SECRET'),
  callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, resp) => {
  unsplash.photos.listPhotos(1, 30)
    .then(toJson)
    .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));