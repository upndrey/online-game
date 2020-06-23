<?php
require_once "connection.php";
$login = mysqli_real_escape_string($link, $_POST['login']);
$password = mysqli_real_escape_string($link, $_POST['password']);

$query = "SELECT password FROM users WHERE login='$login'";
if($result = mysqli_query($link, $query)) {
    $mysqlPass = mysqli_fetch_array($result);
    if($password == $mysqlPass['password']) {
        session_start();
        $_SESSION['login'] = $login;
        header('Location: ../index.php');
        exit;
    }
}
else {
    header('Location: ../pages/auth.php');
    exit;
}