<?php 

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
require 'data.php';

$req = $_GET['req'] ?? null;

if($req) {
  $jsonfile = file_get_contents("restaurant.json");
  $data = json_decode($jsonfile, true)['menu_items'];
  try {
    $resData = new ResData($data);
  } catch (Exception $th) {
      echo json_encode([$th->getMessage()]);
      return;
  }
}

switch($req) {
  case 'res_list': 
    echo $resData->getReslist();
    break;
  
  case 'res_data': 
    $id = $_GET['id'] ?? null;
    echo $resData->getResdata($id);
    break;

  default: 
    echo json_encode(["Invalid Resquest!"]);
    break;
}

?>