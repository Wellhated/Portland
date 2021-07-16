<?php 

    class create_project {
        function create_project($name, $desc, $client_name, $client_company, $client_location, $project_type) {
            $server = 'localhost';
            $user = 'root';
            $pass = 'root';
            $db = 'upwork_projects';
            $conn = new mysqli($server, $user, $pass, $db);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }


            $query_client = "INSERT INTO client_table (client_name, client_company, client_location, last_updated) VALUES ('$client_name', '$client_company', '$client_location', 'N/A')";

            if ($conn->query($query_client) == TRUE) {

            } else {
                die('ERROR CLIENT INSERT');
            }
            
            $query_project = "INSERT INTO project_table (project_name, description, client_id, project_type) VALUES ('$name', '$desc', '$conn->insert_id', '$project_type')";

            if ($conn->query($query_project) == TRUE) {

            } else {
                die('ERROR PROJECT INSERT');
            }


            $get_all = "SELECT * FROM project_table ";
            $result = $conn->query($get_all);
            $projects = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($projects);

            $conn->close();
            die(
                
            );
        }
    }
    

    $data = $_POST['project'];

    $sql_db = new create_project();
    $sql_db->create_project(
        $data['project_name'],
        $data['description'],
        $data['client_name'],
        $data['company'],
        $data['location'],
        $data['project_type']
    );

?>