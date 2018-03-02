<?php
/* Set e-mail recipient */
$myemail  = "your_email@gmail.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['from_name'], "Enter your name");
$phonenum = check_input($_POST['from_phone'], "Enter your phone number");
$subject  = check_input($_POST['from_subject'], "Write a subject");
$email    = check_input($_POST['from_email']);
$comments = check_input($_POST['comments'], "Write your comments");
$calltime = check_input($_POST['Call_Time'], "Call time");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}


/* Let's prepare the message for the e-mail */
$message = "

Your contact form has been submitted by:

Name: $yourname
E-mail: $email
Phone#: $phonenum
Call-Time: $calltime

Subject: $subject 

Message:
$comments

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: ../../successmessage.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>