
function Pizza(toppings, size) {
    this.toppings = [],
    this.size = size
}



Pizza.prototype.addToppings = function (topping) {
    this.toppings.push(topping);
    
}

Pizza.prototype.price = function () {
    var pizzaPrice = 10;

    if (this.size === "xl") {
        pizzaPrice += 5;
    } else if (this.size === "large") {
        pizzaPrice += 3;
    } else {
        pizzaPrice += 2;
    }
    
    if (this.toppings.length > 3) {
        pizzaPrice += 4;
    } else {
        pizzaprice += 6
    } 

    console.log(toppings);
    return pizzaPrice;



}



$(document).ready(function () {


    $("form").submit(function (event) {
        event.preventDefault();
        var size = ($("input:checkbox[size]:checked").val());
        var toppings = []
        $("input:checkbox[name=toppings]:checked").each(function(){
            var checkedToppings = $(this).val();
            toppings.push(checkedToppings);
          });

          var newPizza = new Pizza(size,toppings);

          var pizzaPrice = (newPizza.price());

          $("#result").text(pizzaPrice);
          console.log(toppings);
          
        
    })

   

})

