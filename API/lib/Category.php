<?php
require_once("lib/Task.php");

class Category{

    private $name;

    private $id;

    private $tasks = array();

    public function __construct($info = NULL){
        if($info == NULL){
            return;
        }

        $vars = get_class_vars("Category");
        
        foreach ($vars as $key => $value) {
            //if (in_array($key, $skip_vars)) continue;
            if (array_key_exists($key, $info)) {
                $this->$key = $info[$key];
            }
        }
    }

    public function addTask($newTask){
        array_push($this->tasks, $newTask);
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    public function getID(){
        return $this->id;
    }
}