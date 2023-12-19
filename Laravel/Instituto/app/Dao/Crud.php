<?php
    namespace App\Dao;
    interface Crud{
        public function create($dao);
        public function update($dao);
        public function delete($id);
        public function getById($id);
        public function findAll();
    }
?>
