const tbl = $("#order-summary");

const prices ={
    small: 500,
    medium: 700,
    large: 1200
}

$("document").ready(function(){
    $("form.pizza").submit(function(event){
        event.preventDefault();
    
        const newData = new FormData(this);
        const order = {
            crust: newData.get("crust"),
            size: newData.get("size"),
            quantity: newData.get("quantity"),
            toppings: newData.get("topping"),
            type: newData.get("type"),
            cost: parseInt(prices[newData.get("size")]) * parseInt([newData.get("quantity")])
        };
    $("#output").append("<li>" + "You have ordered " + order.quantity + " " + order.size + " pizza from Topperz pizzeria " + " with crust of " + order.crust + " and topping of " + order.toppings + ". The cost is " + order.cost + "</li>");  
    });
});