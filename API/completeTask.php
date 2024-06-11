<?php
header('Access-Control-Allow-Origin: *');
require_once("includes/db_connect.php");

$task_id = $_POST['task_id'];
$completion_date = '2024-06-04';

if(!isset($task_id)){
    //header('Status: 400');
    print_r($_POST);
    exit();
}

$stmt = $db->prepare('INSERT INTO task_completions (task_id, completion_date) values (?, ?)');
$stmt->execute([$task_id, $completion_date]);
header('Status: 200');
exit();