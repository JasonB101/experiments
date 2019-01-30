const fs = require('fs')
const Papa = require('papaparse')
const file = './files/zips.csv'

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