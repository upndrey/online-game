<?php
if(isset($_POST['exit'])) {
    session_abort();
    header('Location: ../pages/auth.php');
    exit;
}
else if(isset($_POST['profile'])) {
    session_start();
    $_SESSION['page'] = "profile";
    header('Location: ../index.php');
    exit;
}
else if(isset($_POST['game'])) {
    session_start();
    $_SESSION['page'] = "game";
    header('Location: ../index.php');
    exit;
}
else if(isset($_POST['settings'])) {
    session_start();
    $_SESSION['page'] = "settings";
    header('Location: ../index.php');
    exit;
}
else if(isset($_POST['menu'])) {
    session_start();
    $_SESSION['page'] = "menu";
    header('Location: ../index.php');
    exit;
}
else {
    echo "error";
}