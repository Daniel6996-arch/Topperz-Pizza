
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
   var cheeseprice = 0;

   var items = function (selection){
   var selected = new Array();
       selection.each(function () {
    selected.push(this.value);
   });
   if (selected.length > 0) {

    $("#largePizza").append("<p>" + "Selected topping(s): " + selected.join(",") + "</p>");
   }
   };

   //var largeCrust = $("#large-crust-select  option:selected").text(); Why doesn't this code work!!??
  $("#submitOne").click(function(){
    if($("#large-crust-select  option:selected").text() == "Cripsy"){
       price = 15;
    }    
    if($("#large-crust-select  option:selected").text() == "Stuffed"){
       price = 17;
    }
    if($("#large-crust-select  option:selected").text() == "Gluten-Free"){
        price = 19;
    }
    items($("#largeTopping input[type=checkbox]:checked"));
    $("#largePizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " large" + " with" + selected.join(",") + " topping(s)" + "</p>")
  });

  $("#submitTwo").click(function(){
    if($("#medium-crust-select  option:selected").text() == "Cripsy"){
        price = 13;
    }
    if($("#medium-crust-select  option:selected").text() == "Stuffed"){
       price = 14;
    }
    if($("#medium-crust-select  option:selected").text() == "Gluten-Free"){
        price = 16;
    }
   items($("#mediumTopping input[type=checkbox]:checked"))
   $("#mediumPizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " medium" + " with" + selected.join(",") + "topping(s)" + "</p>")
  });

  $("#submitThree").click(function(){
    if($("#small-crust-select  option:selected").text() == "Cripsy"){
        price = 10;
        cheeseprice = 3;
    }
    if($("#small-crust-select  option:selected").text() == "Stuffed"){
        price = 13;
        cheeseprice = 2;
    }
    if($("#small-crust-select  option:selected").text() == "Gluten-Free"){
        price = 15;
        cheeseprice =1;
    }
    items($("#smallTopping input[type=checkbox]:checked"))
    $("#smallPizza").append("<p>" + "Selected crust is " + $("#small-crust-select  option:selected").text() + " small" + " with" + selected.join(",") + " topping(s)" + "</p>")
  });

});

