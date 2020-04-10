
function Pizza(size) {
    this.size = size
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
    

    // if (this.toppings.length < 3) {
    //     toppingPrice += 3;
    //     console.log(this.toppings.length);

    // }else if (this.toppings.length > 3 ) {
    //     toppingPrice += 5
    //     console.log("bye");
    // } 
    // pizzaPrice +=sizePrice;
    // pizzaPrice +=toppingPrice;
    // console.log(pizzaPrice);
    // console.log(sizePrice);
    // console.log(toppingPrice);
    // console.log(this.size);
    // return pizzaPrice;
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

          $("#result").text(pizzaPrice);
        //   console.log(toppings);
        //   console.log(size);
          
        
    })

   

})

