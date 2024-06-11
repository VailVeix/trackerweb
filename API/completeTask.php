<?php
require_once("includes/db_connect.php");

$task_id = $_POST['task_id'];
$completion_date = '2024-06-04';

$stmt = $db->prepare('INSERT INTO task_completions (task_id, completion_date) values (?, ?)');
$stmt->execute([$task_id, $completion_date]);
header('Status: 200');