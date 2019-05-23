const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const ListController = require('./controllers/ListController')

app.set('view engine', 'ejs')


app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', ListController.index)
app.post('/', ListController.handleSearch)

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('conectado a porta 3000')
    }
})