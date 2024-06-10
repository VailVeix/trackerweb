<?php
header('Access-Control-Allow-Origin: *');
require_once("includes/db_connect.php");

require_once("lib/Category.php");

$response = array();

$stmt = $db->prepare('SELECT name, id FROM categories WHERE 1 order by order_by desc');
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_CLASS, 'Category');
while($category = $stmt->fetch()){

    $stmt = $db->prepare('SELECT name, description FROM tasks WHERE category=? order by order_by desc');
    $stmt->execute([$category->getID()]);
    $stmt->setFetchMode(PDO::FETCH_CLASS, 'Task');

    while($task = $stmt->fetch()){
        $category->addTask($task);
    }

    array_push($response, $category);
}
echo json_encode($response);