/*
* If the user is not scrolling past the offset, the nav bar will
* not be transparent. If user goes past the offset value, elements with
* specified classes are added to the navbar to make it not transparent
* when scrolling.
*/
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();