<?php
header('Access-Control-Allow-Origin: *');
require_once("includes/db_connect.php");

$data = json_decode(file_get_contents('php://input'), true);

$task_id = $data['task_id'];
$completion_date = '2024-06-04';

if(!isset($task_id)){
    header('Status: 400');
    exit();
}

$stmt = $db->prepare('INSERT INTO task_completions (task_id, completion_date) values (?, ?)');
$stmt->execute([$task_id, $completion_date]);
header('Status: 200');
exit();