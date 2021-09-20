const tbl = $("#order-summary");

const prices ={
    small: 500,
    medium: 700,
    large: 1200
}

$("document").ready(function(){
    $(".home").click(function(){
        location.reload();
    });
    $(".show-menu").click(function(){
        $("#menu").show();
        $("#home").hide();
        $(".order").hide();
        $(".checkOut").hide();
    });
    $(".show-order").click(function(){
        $(".order").show();
        $("#menu").hide();
        $("#home").hide();
        $(".checkOut").hide();
    });
    $(".show-checkout").click(function(){
        $(".checkOut").show();
        $(".order").hide();
        $("#menu").hide();
        $("#home").hide();
    });
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
    $("#output").append("<li>" + "You have ordered " + order.quantity + " " + order.size + " pizza from Topperz pizzeria " + " with crust of " + order.crust + " and topping of " + order.toppings + ". The cost is Ksh " + order.cost + "</li>");  
    });
});