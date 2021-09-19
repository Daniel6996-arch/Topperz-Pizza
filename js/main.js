$("document").ready(function(){
    $(".home").click(function(){
        location.reload();
    });
    $(".show-menu").click(function(){
        $(".menu").show();
        $("#home").hide();
        $(".order").hide();
        $(".checkOut").hide();
    });
    $(".show-order").click(function(){
        $(".order").show();
        $(".menu").hide();
        $("#home").hide();
        $(".checkOut").hide();
    });
    $(".show-checkout").click(function(){
        $(".checkOut").show();
        $(".order").hide();
        $(".menu").hide();
        $("#home").hide();
    });
    $("#delivery").click(function(){
        var location = prompt("Enter your location");
        $("#delivery-point").text(location);
        $("#delivery-fee").text("$2");
        $(".checkOut").show();
    });
 
    var price = 0;
    var deliveryFee = 2;
    var cheeseprice = 0;
 
    var items = function (selection){
    var selected = new Array();
        selection.each(function () {
     selected.push(this.value);
    });
    if(selected == "cheese"){
        //console.log("large");
        $("#topp").append("<p>" + "Selected topping(s) is cheese for your pizza. The price of topping is $7." + "</p>");
    }
    if(selected == "pepperoni"){
        //console.log("large");
        $("#topp").append("<p>" + "Selected topping(s) is pepperoni for your pizza. The price of topping is $5." + "</p>");
    }
    if(selected == "italiano"){
        //console.log("large");
        $("#topp").append("<p>" + "Selected topping(s) is italiano for your pizza. The price of topping is $3." + "</p>");
    }/*
     if(selected == "cheese", "pepperoni"){
     //console.log("large");
     $("#topp").append("<p>" + "Selected topping(s) is cheese and pepperoni for your pizza." + "</p>");
    }
    if(selected == "italiano", "cheese"){
        //console.log("large");
        $("#topp").append("<p>" + "Selected topping(s) is cheese and italiano for your pizza." + "</p>");
    }
    if(selected === "pepperoni", "italiano"){
        //console.log("large");
        $("#topp").append("<p>" + "Selected topping(s) is pepperoni and italiano for your pizza." + "</p>");
    }
    if(selected === "cheese", "pepperoni", "italiano"){
     //console.log("large");
     $("#topp").append("<p>" + "Selected topping(s) is cheese, pepperoni and italiano for your pizza." + "</p>");
    } */
 
    };
 
    //var largeCrust = $("#large-crust-select  option:selected").text(); Why doesn't this code work!!??
   $("#submitOne").click(function(){
     if($("#large-crust-select  option:selected").text() == "Cripsy"){
        price = 15;
        cheeseprice = 5;
     }    
     if($("#large-crust-select  option:selected").text() == "Stuffed"){
        price = 17;
        cheeseprice = 5;
     }
     if($("#large-crust-select  option:selected").text() == "Gluten-Free"){
         price = 19;
         cheeseprice = 5;
     }
     var finalFee = price + deliveryFee + cheeseprice;
     $("#final-fee").text(finalFee);
     items($("#largeTopping input[type=checkbox]:checked"));
     $("#largePizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " for large pizza." + " The price of crust is $" + price + "." + "</p>")
     $("")
   });
 
   $("#submitTwo").click(function(){
     if($("#medium-crust-select  option:selected").text() == "Cripsy"){
         price = 13;
         cheeseprice = 5;
     }
     if($("#medium-crust-select  option:selected").text() == "Stuffed"){
        price = 14;
        cheeseprice = 5;
     }
     if($("#medium-crust-select  option:selected").text() == "Gluten-Free"){
         price = 16;
         cheeseprice = 5;
     }
     var finalFee = price + deliveryFee + cheeseprice;
     $("#final-fee").text(finalFee);
    items($("#mediumTopping input[type=checkbox]:checked"))
    $("#mediumPizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " for medium pizza." + " The price of crust is $" + price + "." + "</p>")
   });
 
   $("#submitThree").click(function(){
     if($("#small-crust-select  option:selected").text() == "Cripsy"){
         price = 10;
         cheeseprice = 5;
     }
     if($("#small-crust-select  option:selected").text() == "Stuffed"){
         price = 13;
         cheeseprice = 5;
     }
     if($("#small-crust-select  option:selected").text() == "Gluten-Free"){
         price = 15;
         cheeseprice = 5;
     }
     var finalFee = price + deliveryFee + cheeseprice;
     $("#final-fee").text(finalFee);
     items($("#smallTopping input[type=checkbox]:checked"))
     $("#smallPizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " for small pizza." + " The price of crust is $" + price + "." + "</p>")
   });
 
 });