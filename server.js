const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const AtlasObscura = require('node-atlas-obscura')
const atlas = new AtlasObscura()

const PORT = '3615' || process.env.PORT

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


app.get('/popular', async (req, res) => {
    try {
        const places = await atlas.getPopular()
        res.json(places)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

app.get('/places', async (req, res) => {
    try {
        const { city, country, orderByRecent } = req.body
        const places = await atlas.getPlaces({city, country, orderByRecent})
        res.json(places)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

app.get('/place/:id', async (req, res) => {
    try {
        const { placeId, placeOnly } = req.body
        const place = await atlas.getPlaceById(placeId, placeOnly)
        res.json(place)
    }
    catch(err) {
        res.status(400).send(err)
    }
})

app.listen(PORT, function () {
  console.log('Ready');
});