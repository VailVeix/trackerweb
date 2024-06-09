<?php

class Task{

    private $name;

    private $description;

    public function __construct($info = NULL){
        if($info == NULL){
            return;
        }

        $vars = get_class_vars("Task");
        
        foreach ($vars as $key => $value) {
            //if (in_array($key, $skip_vars)) continue;
            if (array_key_exists($key, $info)) {
                $this->$key = $info[$key];
            }
        }
    }
}