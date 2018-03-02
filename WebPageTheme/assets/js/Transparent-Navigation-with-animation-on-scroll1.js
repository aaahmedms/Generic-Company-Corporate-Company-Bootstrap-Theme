/* 
* Toggle tranparent navbar when the user scrolls 
* the page past a certain distance.
*/
  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
        $('.navbar-default .navbar-nav > li > a').addClass('colortext');
        $('#logoImg').addClass('removeborder');
    
    } else {
        $('.opaque-navbar').removeClass('opaque');
        $('.navbar-default .navbar-nav > li > a').removeClass('colortext');
        $('#logoImg').removeClass('removeborder');
    }
});