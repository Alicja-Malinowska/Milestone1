//the below code was given to me by Anthony O'Brien
//it makes the expanded nav list on mobile to collapse when a navigation link is clicked/touched

$(".navbar-nav li a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});