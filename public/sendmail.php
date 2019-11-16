<?php
ini_set("include_path", '/home3/blacksq/php' . PATH_SEPARATOR . ini_get("include_path") );
include('Mail.php');
// include('Mail/mime.php');

try{
  $input_name     = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
  $input_subject  = filter_input(INPUT_POST, "subject", FILTER_SANITIZE_STRING);
  $input_context  = filter_input(INPUT_POST, "context", FILTER_SANITIZE_STRING);
  $input_message  = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);
  $input_replyTo  = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

  if(!$input_replyTo){
    http_response_code(406);
    echo json_encode([
      "status" => "error",
      "message" => 'Email validation failed!',
      "invalidEmail" => $POST["email"]
    ], JSON_PRETTY_PRINT);
    exit(0);
  }

  $to      = 'gareth@blacksquare.co.za';
  $subject = $input_subject ?: 'Query from Russell Comrie website';
  $message = $input_message ?: 'No message was provided';  

  $headers['From']          = $input_replyTo;
  $headers['Reply-To']      = $input_replyTo;
  $headers['Subject']       = $subject;

  $params['sendmail_path']  = '/usr/lib/sendmail';

  $text_context = $input_context ? $input_context . $crlf . $crlf : '';
  $context = $input_context ? '<p>' . $input_context . '</p>' : '';
  $name = $input_name ? $input_name : 'an unknown visitor';
  $crlf = "\n";
  $text = 'Dearest Russell' . $crlf . $crlf .
          'A message has been received from ' . $name . ' on your Russell Comrie website.' . $crlf . $crlf . 
          $text_context . 
          $message . $crlf . $crlf .
          'Thanks,'  . $crlf . 
          'Your website';
  // $html = '<html><body>' . 
  //         '<h1>Dearest Russell</h1>' . 
  //         '<p>A message has been received from ' . $name . ' on your <a href="russellcomrie.com">Russell Comrie</a> website.</p>' . 
  //         $context . 
  //         '<pre>' . $message . '</pre>' . 
  //         '<p>Thanks,<br />Your website</p>' . 
  //         '</body></html>';

  // $mime = new Mail_mime($crlf);
  
  // $mime->setTXTBody($text);
  // $mime->setHTMLBody($html);

  // $body = $mime->get();
  // $headers = $mime->headers($headers);

  // var_dump($headers);
  // var_dump($body);
      
  $mailer = Mail::factory('sendmail', $params);
  if (!$mailer->send($to, $headers, $text)) {
      $errorMessage = $mailer->getMessage();
      http_response_code(500);
      echo json_encode([
        "status" => "error",
        "message" => 'Oops! Something went wrong!',
        "error" => $errorMessage
      ], JSON_PRETTY_PRINT);
  }

  echo json_encode([
    "status" => "OK",
    "message" => 'Your message has been sent!'
  ], JSON_PRETTY_PRINT);
} catch (Exception $err){
  http_response_code(500);
  echo json_encode([
    "status" => "error",
    "message" => 'Oops! Something went wrong!'
  ], JSON_PRETTY_PRINT);
}
?> 