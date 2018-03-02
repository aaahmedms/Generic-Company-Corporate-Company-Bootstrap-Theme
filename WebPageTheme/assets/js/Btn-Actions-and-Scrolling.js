/*
* These are the side menu buttons with text "Open Jobs" and
* "Contact Us". btn1 refers to "Open Jobs", while btn2
* and btn2notindex refer to "Ccontact Us" button.
*/

/**********************************
This is used for the Open Jobs button to
take the user to the careers page.
*********************************/
$("#btn1").click(function() {
    window.location = "career.html";
});

/*************************************************8
This is used for the contact button on the homepage to
scroll to the contact section on that page.
*****************************************/

//The #contactContain is id of the destination element, in this case it is the contact container within the page
$("#btn2").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactContain").offset().top - 65},
        'slow');
    /*
    * The value of 80 is a scale factor takes consideration of the top nav bar height,
    * this value can be adjusted to however far you want to the scroll down 
    * towards a web element.
    */
});    

/****************************************8
This is used for the contact button on all pages except
for the homepage to
take the user to the contact page.
****************************************8*/
$("#btn2notindex").click(function() {
     window.location = "contact.html";
}); 