var friend = {
    name: "Jose", 
    sex: "M", 
    weight: 85.4,
    f_food: "Pizza",
    eat(food='Hamburguer'){
        console.log("What would you eat?")
        this.f_food = food
    }
}
friend.eat("Chocolate")

console.log(`Name: ${friend.name}, sex: ${friend.sex}, weight: ${friend.weight}, favorite food: ${friend.f_food}`)