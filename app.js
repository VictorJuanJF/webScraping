const request = require('request');
const cheerio = require('cheerio');

let data = "sistema+ecommerce";
let Url = "http://renati.sunedu.gob.pe/simple-search?query=" + data;
let titles = [];
console.log("Se hizo web scraping a: ", Url);
request(
    Url,
    (err, res, body) => {
        if (!err & (res.statusCode == 200)) {
            let $ = cheerio.load(body);
            $('a', '.field-title').each(function() {
                var title = $(this).text();
                titles.push(title);
            });
        }
        console.log(titles);
        console.log("gaaa");
    });