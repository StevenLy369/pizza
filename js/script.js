
function Pizza(toppings, size){
    this.toppings=toppings,
    this.size=size
}



Pizza.prototype.addPizza=function(pizza){
    this.pizzas.push(pizza);
    console.log(pizza);
}

Pizza.prototype.price=function(){
    var pizzaPrice = 10;

    if (this.size == "xl"){
        pizzaprice +=5;
    }else if(this.size =="large"){
        pizzaPrice +=3;
    }else{
        pizzaprice +=2;
    }

    if (this.toppings.length > 3){
        pizzaPrice += 4;
    }else if(this.toppings < 3){
        pizzaprice += 6
    }else{
        break;
    }




}








$(document).ready(function(){



    
    $("form").submit(function(event){
        event.preventDefault();
        console.log("hello");
    })



})