
function Pizza(size, toppings) {
    this.size = size
    this.toppings = toppings
}



Pizza.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
    
}

Pizza.prototype.price = function() {
    var pizzaPrice = 10;


    if (this.size === "xtraLarge") {
        pizzaPrice += 5;
        console.log("xl")
    } else if (this.size === "large") {
        pizzaPrice +=3
        console.log("large");
    } else if (this.size =="medium") {
        pizzaPrice += 2;
    }
    

    if (this.toppings.length <= 3) {
        pizzaPrice += 3
        

    }else if (this.toppings.length > 3 ) {
        pizzaPrice += 5
       
    } 
   

console.log(pizzaPrice);
return pizzaPrice;

}



$(document).ready(function () {


    $("form").submit(function (event) {
        event.preventDefault();
        var inputSize = ($('input[name=size]:checked').val());
        var toppings = []
        $("input:checkbox[name=toppings]:checked").each(function(){
            var checkedToppings = $(this).val();
            toppings.push(checkedToppings);
          });
          
          var newPizza = new Pizza(inputSize,toppings);

          var pizzaPrice = (newPizza.price());

          $("#result").text("Your Total is $" + pizzaPrice + " and has these toppings: " + toppings);
        //   console.log(toppings);
        //   console.log(size);
          
        
    })

   

})

