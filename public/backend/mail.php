<?php

require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;


if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    exit();
}


function sendMail(string $body, ?string $attachmentPath): string
{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);


//    $mail->SMTPDebug = \PHPMailer\PHPMailer\SMTP::DEBUG_SERVER;
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = CONFIG['host'];                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = CONFIG['username'];                     //SMTP username
    $mail->Password = CONFIG['password'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port = CONFIG['port'];                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    $mail->Encoding = PHPMailer::ENCODING_BASE64;
    $mail->CharSet = 'UTF-8';

    //Recipients
    $mail->setFrom(CONFIG['username'], 'Дом кругом');
    $mail->addAddress(CONFIG['send_to']);     //Add a recipient

    $mail->isHTML(false);
    $mail->Subject = 'Заявка';
    $mail->Body = $body;
    if ($attachmentPath) {
        $mail->addAttachment($attachmentPath, 'Прикрепленный файл.' . PHPMailer::mb_pathinfo($attachmentPath, PATHINFO_EXTENSION) );
    }

    $mail->send();
    return 'Сообщение отправлено';

}


function getFilePath(): ?string 
{
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {

        $fileData = $_FILES['file'];
        $ext = PHPMailer::mb_pathinfo($fileData['name'], PATHINFO_EXTENSION);
        $targetPath = tempnam(sys_get_temp_dir(), hash('sha256', $fileData['name'])) . '.' . $ext;

        move_uploaded_file($fileData['tmp_name'], $targetPath);

        return $targetPath;
    }
    return null;
}


$phone = $_POST['phone'] ?? 'test';
$nick = $_POST['nick'] ?? 'test';
$email = $_POST['email'] ?? 'test';
$message = $_POST['message'] ?? 'test';
$filePath = getFilePath();


$body = 
    <<<EOL
    Телефон: {$phone}
    Ник: {$nick}
    Email: {$email}
    Сообщение: {$message}
    EOL;

try {
    $result = sendMail($body, $filePath);
} catch (Exception $e) {
    http_response_code(500);
    echo "Не удалось отправить письмо: {$e->getMessage()}, {$e->getTraceAsString()}";
    exit();
}

echo $result;
exit();