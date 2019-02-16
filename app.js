const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');

// let data = "sistema+ecommerce";
// let Url = "http://renati.sunedu.gob.pe/simple-search?query=" + data;
// let titles = [];
// console.log("Se hizo web scraping a: ", Url);
// request(
//     Url,
//     (err, res, body) => {
//         if (!err & (res.statusCode == 200)) {
//             let $ = cheerio.load(body);
//             $('a', '.field-title').each(function() {
//                 var title = $(this).text();
//                 titles.push(title);
//             });
//         }
//         console.log(titles);
//         console.log("gaaa");
//     });


let data = "sistema+ecommerce";
let Url =
    "http://renati.sunedu.gob.pe/simple-search?query=" +
    data;
// cors-anywhere.herokuapp.com/
let titles = [];
console.log("Se hizo web scraping a: ", Url);
// request(Url, (err, res, body) => {
//   if (!err & (res.statusCode == 200)) {
//     let $ = cheerio.load(body);
//     $("a", ".field-title").each(function() {
//       var title = $(this).text();
//       titles.push(title);
//     });
//   }
//   console.log(titles);
//   console.log("gaaa");
// });

axios.get(Url)
    .then((response) => {
        let $ = cheerio.load(response.data);
        $('a', ".field-title").each(function(i, e) {
            let links = $(this).text();
            console.log(links);
        })
    }).catch(function(e) {
        console.log(e);
    });

// axios.get(Url).then(
//     response => {
//         if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//             let titles = [];
//             $("a", ".field-title").each(function() {
//                 var title = $(this);
//                 titles.push(title);
//             });
//             console.log("Titles: ", titles);
//         }
//     },
//     error => console.log(error)
// );