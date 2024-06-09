<?php
ini_set("display_errors", 1);

require_once("includes/db_connect.php");

require_once("lib/Task.php");

$stmt = $db->prepare('SELECT name, description FROM tasks WHERE 1 order by order_by desc');
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_CLASS, 'Task');
$tasks = $stmt->fetch();
print_r($tasks);