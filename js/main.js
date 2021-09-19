
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
   $(".show-toppingTwo").click(function(){
    $(".topping-Two").toggle();
   });
   $(".show-toppingOne").click(function(){
    $(".topping-One").toggle();
   });

   var optionLarge = $("#crust-large option").val();
   $("#crust-large option").click(function(){
    console.log("love");
   })
});
