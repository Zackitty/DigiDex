import {currentlist } from './dd.js'
import fs  from 'fs'; 
import { Blob, Buffer } from 'node:buffer';
import Scraper from 'images-scraper';
import Promise from 'bluebird'

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

const googleimg = async (img) => {
  const results = await google.scrape(img, 1);
  return results[0].url;
};


const fileExtension = {
    '.jpg': '.jpg',
    '.jpeg': '.jpeg',
    '.png': '.png',
    '.gif': '.gif',
    '.pnj': '.pnj',
    '.pdf': '.pdf',
    '.tiff': '.tiff'
}
const e  = async (doe) => {
    let string = await googleimg(doe)
    let lo;
    for (let key in fileExtension) {
        if (string.search(fileExtension[key]) !== -1){
            lo = string.substring(0, string.indexOf(fileExtension[key])) + fileExtension[key]
        }
    }

    return lo
}

const newObject = {}
const makeNewJSON = async () => {


const res = await Promise.each(currentlist, async (digi) => {
    
    Object.keys(digi).forEach(async (key) => {
        var replacedKey = key.split(" ").join("")
        if (key !== replacedKey) {
           digi[replacedKey] = digi[key];
           delete digi[key];
        }

        if(key === 'Digimon'){
            digi['Name'] = digi[key];
            delete digi[key];
        }
     });

     
    if(!digi['img'] || digi['img'] === ""){
        digi['img'] = await e(digi['Name']);
        }
})

fs.appendFile('./digimonList.json', JSON.stringify(res), function(err){
    if (err) throw err;
    console.log('Saved!');
}) 
}

await makeNewJSON()

