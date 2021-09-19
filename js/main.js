
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
       prompt("Enter your location")
   });

   var price = 0;
   var cheeseprice = 0;

   var items = function (selection){
   var selected = new Array();
       selection.each(function () {
    selected.push(this.value);
   });
   if (selected.length > 0) {

    alert("Selected values: " + selected.join(","));
   // alert(selected)
   }
   };

   //var largeCrust = $("#large-crust-select  option:selected").text(); Why doesn't this code work!!??
  $("#submitOne").click(function(){
      priceLarge();  
  })
  $("#submitTwo").click(function(){
    if($("#medium-crust-select  option:selected").text() == "Cripsy" && items($("#mediumTopping input[type=checkbox]:checked") == "cheeseSmall" )){
        //console.log("shake")
        price = 13;
        cheeseprice = 3;
    }
    if($("#medium-crust-select  option:selected").text() == "Stuffed"){
       // console.log("bake")
       price = 14;
    }
    if($("#medium-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
        price = 16;
    }
    console.log(price);
   console.log(cheeseprice);
  })
  $("#submitThree").click(function(){
    if($("#small-crust-select  option:selected").text() == "Cripsy"){
        //console.log("shake")
        price = 10;
        cheeseprice = 3;
    }
    if($("#small-crust-select  option:selected").text() == "Stuffed"){
        //console.log("bake")
        price = 13;
        cheeseprice = 2;
    }
    if($("#small-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
        price = 15;
        cheeseprice =1;
    }
    console.log(price);
  console.log(cheeseprice)
    console.log(selected);
    
  })

});
 var priceLarge = function(){
    if($("#large-crust-select  option:selected").text() == "Cripsy"){
        //console.log("shake")
       price = 15;
        //$("#largePizza").text("Cripsy" + " " + price);
    }
    if($("#large-crust-select  option:selected").text() == "Stuffed"){
        //console.log("bake")
       price = 17;
    }
    if($("#large-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
        price = 19;
    }
    console.log(price);
 };
