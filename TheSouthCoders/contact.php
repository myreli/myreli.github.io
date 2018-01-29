<?php

// Validate fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['subj'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "<script>document.location.href='index.html?error=Campos Inválidoss'</script>";
    return false;
   }

// Get valid information
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$subj = strip_tags(htmlspecialchars($_POST['subj']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$to = 'thesouthcoders@gmail.com'; 
$emailsubject = "[TSC Contact Form] . $subj";

//headers 
$mailheader = "From: " . $email . "\r\n"; 
$mailheader .= "Reply-To: " . $email . "\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

//body
$mailbody = "New message from The South Coders contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

if(mail($to, $emailsubject, $mailbody, $mailheader)) {
  echo "<script>document.location.href='index.html?sentmessage=true#contact'</script>";
  return true;
}  
else {
  echo "<script>document.location.href='index.html??sentmessage=false#contact'</script>";
  return false;
} 
    

?>