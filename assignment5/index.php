<?php
include_once "config.php";
include "database.php";
include 'registrations.php';
    error_reporting(0);

use Data\Database;
use Data\registrations;

header('Content-type: application/json');

$db= new Database();
$record = new registrations($db->connect());

$stmt = $record->getRecords();
$row_count = $stmt->rowCount();


if ($row_count > 0) {
    $record_arr = array(
        "records" => array()
    );

    while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $record_arr['records'][] = $row;
    }

    echo json_encode($record_arr);
}


?>
