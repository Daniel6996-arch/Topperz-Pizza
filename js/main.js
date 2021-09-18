
$("document").ready(function(){
   $(".show-crustOne").click(function(){
       $(".crust-One").toggle();
   });
   $(".show-crustTwo").click(function(){
    $(".crust-two").toggle();
   });
   $(".show-crustThree").click(function(){
    $(".crust-Three").toggle();
   });
   $(".show-toppingThree").click(function(){
       $(".topping-Three").toggle();
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
