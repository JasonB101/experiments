
function toCamelCase(str){
const array = str.split("_")
const results = array.map((word, i) => {
    
return i < 1 ? word : word.substr(0,1).toUpperCase() + word.substr(1, word.length - 1) 
}).join("")
return results
}

function toSnakeCase(str){
return str.split("").reduce((sum, x) => x === x.toUpperCase() ? sum + `_${x.toLowerCase()}` : sum + x, "")
}

console.log(toCamelCase("hello_edabit"))      // "helloEdabit"
console.log(toSnakeCase("helloEdabit"))        // "hello_edabit"
console.log(toCamelCase("is_modal_open"))      // "isModalOpen"
console.log(toSnakeCase("getColor"))            // "get_color"