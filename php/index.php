<?php
if(isset($_POST['exit'])) {
    session_abort();
    header('Location: ../pages/auth.php');
    exit;
}