const fs = require('fs')
const Papa = require('papaparse')
const file = './files/zips.csv'
// When the file is a local file when need to convert to a file Obj.
//  This step may not be necissary when uploading via UI
const content = fs.readFileSync(file, "utf8")
let result = Papa.parse(content, { header: true }).data


const object = result.reduce((sum, item)=>{
    sum[item['Zipcode']] = `${item['City']}, ${item['State']}`
    return sum
}, {})
fs.writeFile('./files/zip-hash-table.json', JSON.stringify(object), function (err) {
    if (err) throw err
    console.log("Success")
  });