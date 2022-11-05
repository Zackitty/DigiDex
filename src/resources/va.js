// import {currentlist } from './dd.js'
import fs  from 'fs'; 
import { Blob, Buffer } from 'node:buffer';
import Scraper from 'images-scraper';
import Promise from 'bluebird'
import { digz } from './somethin.js'

// const google = new Scraper({
//   puppeteer: {
//     headless: false,
//   },
// });

// const googleimg = async (img) => {
//   const results = await google.scrape(img, 1);
//   return results[0].url;
// };


// const fileExtension = {
//     '.jpg': '.jpg',
//     '.jpeg': '.jpeg',
//     '.png': '.png',
//     '.gif': '.gif',
//     '.pnj': '.pnj',
//     '.pdf': '.pdf',
//     '.tiff': '.tiff'
// }
// const e  = async (doe) => {
//     let string = await googleimg(doe)
//     let lo;
//     for (let key in fileExtension) {
//         if (string.search(fileExtension[key]) !== -1){
//             lo = string.substring(0, string.indexOf(fileExtension[key])) + fileExtension[key]
//         }
//     }

//     return lo
// }

// const newObject = {}



function res(currentlist) {
    currentlist.map( digi => {
        let [new1Key, new1Value] = Object.entries(digi)[0]
        let [new2Key, new2Value] = Object.entries(digi)[1]
        let [new3Key, new3Value] = Object.entries(digi)[2]
        let [new4Key, new4Value] = Object.entries(digi)[3]
        let [new5Key, new5Value] = Object.entries(digi)[4]
        let [new6Key, new6Value] = Object.entries(digi)[5]
        let [new7Key, new7Value] = Object.entries(digi)[6]
        let [new8Key, new8Value] = Object.entries(digi)[7]
        let [new9Key, new9Value] = Object.entries(digi)[8]
        let [new10Key, new10Value] = Object.entries(digi)[9]
        let [new11Key, new11Value] = Object.entries(digi)[10]
        let [new12Key, new12Value] = Object.entries(digi)[11]
        let [new13Key, new13Value] = Object.entries(digi)[12]
        let [new14Key, new14Value] = Object.entries(digi)[13]
        delete digi[new1Key]
        delete digi[new2Key]
        delete digi[new3Key]
        delete digi[new4Key]
        delete digi[new5Key]
        delete digi[new6Key]
        delete digi[new7Key]
        delete digi[new8Key]
        delete digi[new9Key]
        delete digi[new10Key]
        delete digi[new11Key]
        delete digi[new12Key]
        delete digi[new13Key]
        delete digi[new14Key]
        digi[new2Key] = new2Value
        digi[new7Key] = new7Value
        digi[new5Key] = new5Value
        digi[new4Key] = new4Value
        digi[new3Key] = new3Value
        digi[new6Key] = new6Value
        digi[new1Key] = new1Value
        digi[new8Key] = new8Value
        digi[new9Key] = new9Value
        digi[new10Key] = new10Value
        digi[new11Key] = new11Value
        digi[new12Key] = new12Value
        digi[new13Key] = new13Value
        digi[new14Key] = new14Value
    });



     

fs.appendFile('./digimonList.json', JSON.stringify(currentlist), function(err){
    if (err) throw err;
    console.log('Saved!');
}) 
}

res(digz)

