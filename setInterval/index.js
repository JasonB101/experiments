function whatTime(){
    date = new Date()
    console.clear()
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
}

setInterval(whatTime, 1000)