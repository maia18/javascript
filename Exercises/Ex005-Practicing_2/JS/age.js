function Check() {
    var now = new Date()
    var year_now = now.getFullYear()
    let year = document.getElementById("iYear")
    let image = document.querySelector("div#image")
    var res = document.querySelector("div#res")
    if (year.value == 0 || year.value > year_now) {
        window.alert("Invalid datas")
    } else {
        var sex = document.getElementsByName("Sex")
        var age = year_now - Number(year.value)
        var gender = ''
        if (sex[0].checked) {
            gender =  'Woman'
            if (age <= 5) {
                image.innerHTML = `<img src="image/Baby-woman.jpg" alt="Baby-woman.jpg">`
            } else if (age <= 16) {
                image.innerHTML = `<img src="image/Child-woman.jpg" alt="Child-woman.jpg">`
            } else if (age <= 25) {
                image.innerHTML = `<img src="image/Young-woman.jpg" alt="Young-woman.jpg">`
            } else if (age <= 60) {
                image.innerHTML = `<img src="image/Adult-woman.jpg" alt="Adult-woman.jpg">`
            } else {
                image.innerHTML = `<img src="image/Old-woman.jpg" alt="Old-woman.jpg">`
            }
        } else if (sex[1].checked){
            gender = 'Man'
            if (age <= 5) {
                image.innerHTML = `<img src="image/Baby-man.jpg" alt="Baby-man.jpg">`
            } else if (age <= 16) {
                image.innerHTML = `<img src="image/Child-man.jpg" alt="Child-man.jpg">`
            } else if (age <= 25) {
                image.innerHTML = `<img src="image/Young-man.jpg" alt="Young-man.jpg">`
            } else if (age <= 60) {
                image.innerHTML = `<img src="image/Adult-man.jpg" alt="Adult-man.jpg">`
            } else {
                image.innerHTML = `<img src="image/Old-man.jpg" alt="Old-man.jpg">`
            }
        } else {
            window.alert("Select your gender!!!")
        }
        res.innerHTML = `Your gender is <strong>${gender}</strong> and your age is <strong>${age} years old</strong>`
    }   
}