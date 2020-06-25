<?php
require_once "connection.php";
session_start();
$login = $_SESSION['login'];

$query = "SELECT id FROM users WHERE login='$login'";
$result = mysqli_query($link, $query);
if($mysqlUserId = mysqli_fetch_assoc($result)) {
    $id = $mysqlUserId['id'];
    $arr = [];

    $query2 = "SELECT * FROM user_items WHERE user_id='$id'";
    $result2 = mysqli_query($link, $query2);
    while($mysqlUserItem = mysqli_fetch_assoc($result2)) {
        $id = $mysqlUserItem['item_id'];

        $query3 = "SELECT * FROM items WHERE id='$id'";
        $result3 = mysqli_query($link, $query3);
        if($mysqlItem = mysqli_fetch_all($result3, MYSQLI_ASSOC)) {
            array_push($mysqlUserItem, $mysqlItem);
            array_push($arr, $mysqlUserItem);
        }
    }
    echo json_encode($arr);
}