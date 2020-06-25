<?
session_start();
if(!$_SESSION['login']) {
    header('Location: ./pages/auth.php');
    exit;
}
?>

<html>
<head>
    <title>Escape from Barnaul</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<div id="wrapper"></div>
</body>
<script>
    let js_page = '<? echo $_SESSION['page'];?>';
</script>
<script src="js/app.js" type="module"></script>
</html>