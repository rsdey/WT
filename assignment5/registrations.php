<?php
namespace Data;
class registrations{


    public $name = null;
    public $email = null;
    public $tickets = null;
    public $topic = null;

    private $table_name =registrations;
    private $conn = null;

    public function __construct($conn) {
        $this->conn = $conn;
        
    }

    public function getRecords() {
        $sql = "SELECT * FROM {$this->table_name}";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt;
    }



  public function getRegList() {
    $sql = "SELECT * FROM `{$this->table_name}`;";

    $stmt = $this->conn->prepare($sql);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
      $regArr = array(
          "records" => array()
      );
      while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
          $regArr['records'][] = $row;
      }
      return json_encode($regArr);
    } else {
      return json_encode(["No data"]);
    }
  }

  public function addReg($name, $email, $tickets, $topic) {
    $sql = "INSERT INTO {$this->table_name} (name, email, tickets, topic) VALUES ('{$name}', '{$email}', '${tickets}', '${topic}')";

    $stmt = $this->conn->prepare($sql);

    $stmt->execute();
    return json_encode($stmt);
  }
}
 ?>