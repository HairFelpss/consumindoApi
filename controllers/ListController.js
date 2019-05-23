const axios = require('axios');
const mysql = require('mysql');
const config = require('../db.js');
const connection = mysql.createConnection(config);

class ListController {

    index(req, res) {
        return res.render('index')
    }

    async handleSearch(req, res) {
        const input = req.body.search
        const apiURL = await axios.get('https://api.iextrading.com/1.0' + `/stock/${input}/quote`)
        const name = apiURL.data.companyName
        const price = apiURL.data.latestPrice

        if (price && name) {
            const sql = `INSERT INTO latestPrice(Enterprise, Price)  
        VALUES('${name}', ${price})`;


            connection.query(sql);

            connection.end();
        }

        return res.render('index', { name, price })
    }


}

module.exports = new ListController()