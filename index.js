$(document).keypress(function(event){
    $("h1").text(event.key)
})

//or

$("body").keypress(function(event){
    $("h1").text(event.key)
})

$("h1").on("mouseover", function(event){
    $("h1").css("color", "red")
})


//animations using jquery

$("h1").on("click", function(event){
    $("h1").hide();
})

//similar methods

// $("button").on("click", function(event){
//     $("h1").toggle();
// })

// $("button").on("click", function(event){
//     $("h1").fadeOut();
// })


$("button").on("click", function(event){
    $("h1").fadeIn();
})

//.fadeToggle();,  slideUp();, slideDown();

$("button").on("click", function(event){
    $("h1").animate({opacity: 0.5});
})