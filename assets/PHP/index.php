<?php
include "auth.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

  if($name === "" || $email === "" || $message === ""){
    echo "<script>alert('Please fill required fields properly');</script>";
        header("Location: ../../index.html?error=empty#contactForm");

    exit();
}

    mysqli_query($conn, "insert into details (uname, uemail, udetail, umessage) VALUES('$name', '$email', '$subject', '$message')");
    header("Location: ../../index.html?success=1");
    exit();
}
