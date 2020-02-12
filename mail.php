<?php 
    if((isset($_POST['name']))&&(isset($_POST['email'])&&$_POST['message']&&$_POST['phone']!="")){ 
        $to = 'gael.pro.dev@gmail.com';
        $subject = 'Demande';
        $email = $_POST['email'];
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><b>Name:</b> '.$_POST['name'].'</p>
                        <p><b>Tél:</b> '.$_POST['phone']. '</p>
                        <p><b>message:</b> '.$_POST['message'].'</p>                       
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: $email\r\n"; 
        mail($to, $subject, $message, $headers);
        echo json_encode(array('status' => 'success'));
    } else {
        echo json_encode(array('status' => 'error'));
    }
?>