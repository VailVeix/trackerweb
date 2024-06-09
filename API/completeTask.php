<?php
ini_set("display_errors", 1);

require_once("includes/db_connect.php");
require_once("lib/Task.php");

$task_id = 1;
$completion_date = '2024-06-04';

$stmt = $db->prepare('INSERT INTO task_completions (task_id, completion_date) values (?, ?)');
$stmt->execute([$task_id, $completion_date]);