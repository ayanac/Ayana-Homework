$(document).ready(function() {
   // WRITE OTHER CODE HERE!!

  $(".button blue").submit(function(event){
                event.preventDefault(event);
                console.log('submit intercepted');
            });

$(".readmore").click(function(event){
     $(".readmore").hide();
     $("#show-this-on-click, .readless").hide().slideDown('slow');
});    

$(".readless").click(function(event){
    $(".readmore").show();
    $("#show-this-on-click, .readless").show().slideUp('slow');
});
$(".learnmore").click(function(event){
     $(".learnmore").hide();
     $("#learnmoretext").hide().slideDown('slow');
});

});