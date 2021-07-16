<?php 

    class DeleteRow {
        function DeleteRow($index) {

            $server = 'localhost';
            $user = 'root';
            $pass = 'root';
            $db = 'upwork_projects';
            $conn = new mysqli($server, $user, $pass, $db);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $client_id = "SELECT client_id FROM project_table WHERE project_id = $index";
            $id = $conn->query($client_id)->fetch_all(MYSQLI_ASSOC)[0]["client_id"];

            $query = "DELETE FROM project_table WHERE project_id=$index";
            $query_client = "DELETE FROM client_table WHERE client_id=$id";


            if ($conn->query($query) == true) {}
            if ($conn->query($query_client) == true) {}

            die($index);
        }
    }

    $index = $_POST['index'];
    $sql = new DeleteRow();
    $sql->DeleteRow($index);
    
?>