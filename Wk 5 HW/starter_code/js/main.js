$(document).ready(function() {
   // WRITE OTHER CODE HERE!!

  $(".button blue").submit(function(event){
                event.preventDefault(event);
                console.log('submit intercepted');
            });

$(".readmore").click(function(){
     $(".readmore").hide();
     $("#show-this-on-click, .readless").show().slideDown('300');
     
});

$(".readless").click(function(){
    $(".readmore").show();
    $("#show-this-on-click, .readless").hide().slideUp('300');
});
$(".learnmore").click(function(){
     $("#learnmoretext").show();
     $(".learnmore").hide();
     $("#learnmoretext").slidedown('slow');
});

});