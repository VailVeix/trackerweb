<?php
$servername = "localhost";
$username = "yiblgkte_vailveix";
$password = "P8;OdeG[.^bB";

try {
  $db = new PDO("mysql:host=$servername;dbname=yiblgkte_task_tracker", $username, $password);
  // set the PDO error mode to exception
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}