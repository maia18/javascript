function Hour_format(date) {
    var hours = date.getHours()
    var min = date.getMinutes()

    hours = hours < 10 ? '0' + hours : hours
    min = min < 10 ? '0' + min : min
    
    return `${hours}:${min}`
}

function Hour() {
    var now = new Date()
    var hour_format = Hour_format(now)

    var hour_number = now.getHours()
    
    let hour = document.querySelector("div#hour")
    hour.innerHTML = `It's ${hour_format}`
    let img = document.querySelector("div#image")
    if (hour_number < 12) {
        img.innerHTML = `<img src="image/day.jpg" alt="day.jpg">`
    } else if (hour_number < 18) {
        img.innerHTML = `<img src="image/afternoon.jpg" alt="afternoon.jpg">`
    } else {
        img.innerHTML = `<img src="image/night.jpg" alt="night.jpg">`
    }
}