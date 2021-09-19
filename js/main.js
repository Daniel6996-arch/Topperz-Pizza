
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
   })
   
   //var largeCrust = $("#large-crust-select  option:selected").text(); Why doesn't this code work!!??
  $("#submitOne").click(function(){
    //console.log($("#large-crust-select  option:selected").text());
    if($("#large-crust-select  option:selected").text() == "Cripsy"){
        //console.log("shake")
    }
    if($("#large-crust-select  option:selected").text() == "Stuffed"){
        //console.log("bake")
    }
    if($("#large-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
    }
  })
  $("#submitTwo").click(function(){
    //console.log($("#large-crust-select  option:selected").text());
    if($("#medium-crust-select  option:selected").text() == "Cripsy"){
        console.log("shake")
    }
    if($("#medium-crust-select  option:selected").text() == "Stuffed"){
        console.log("bake")
    }
    if($("#medium-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
    }
  })
  $("#submitThree").click(function(){
    //console.log($("#large-crust-select  option:selected").text());
    if($("#small-crust-select  option:selected").text() == "Cripsy"){
        //console.log("shake")
    }
    if($("#small-crust-select  option:selected").text() == "Stuffed"){
        //console.log("bake")
    }
    if($("#small-crust-select  option:selected").text() == "Gluten-Free"){
        //console.log("shake and bake")
    }
  })

});
