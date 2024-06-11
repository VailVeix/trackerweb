<?php
header('Access-Control-Allow-Origin: *');
require_once("includes/db_connect.php");
require_once("lib/Category.php");

$response = array();

$categoryQuery = $db->prepare('SELECT name, id FROM categories WHERE 1 order by order_by desc');
$categoryQuery->execute();
$categoryQuery->setFetchMode(PDO::FETCH_CLASS, 'Category');
while($category = $categoryQuery->fetch()){

    $taskQuery = $db->prepare('SELECT name, description, id FROM tasks WHERE category=? order by order_by desc');
    $taskQuery->execute([$category->getID()]);
    $taskQuery->setFetchMode(PDO::FETCH_CLASS, 'Task');

    while($task = $taskQuery->fetch()){
        $category->addTask($task);
    }

    array_push($response, $category->jsonSerialize());
}
echo json_encode($response);