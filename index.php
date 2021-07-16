<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./index.css">
    <title>Project Manager</title>
</head>
<body>

    <style>
        
    </style>

    <?php 
        $server = 'localhost';
        $user = 'root';
        $pass = 'root';
        $db = 'upwork_projects';
        $conn = new mysqli($server, $user, $pass, $db);

        $query = "SELECT * FROM project_table";
        $result = $conn->query($query);
        $PROJECT_DB = $result->fetch_all(MYSQLI_ASSOC);
    ?>

    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">ID</th>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date Created</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Client ID</th>
            <th scope="col">Project Type</th>
            <th scope="col">
                <button onclick="OpenForm()" class="btn btn-success" style="height: 30px; width: 150px; padding-top: 1px;">Create New</button>
            </th>
            </tr>
        </thead>
        <tbody class="result">
                <?php foreach($PROJECT_DB as $key => $value):?>
                <tr>
                    <th style="padding-top: 20px;" scope="row"> </th>
                    <th style="padding-top: 20px;" scope="row"><?php echo $value['project_id']; ?></th>
                    <td style="padding-top: 20px;"><?php echo $value['project_name']; ?></td>
                    <td style="padding-top: 20px;"><?php echo $value['description']; ?></td>
                    <td style="padding-top: 20px;"><?php echo date_format(date_create($value['date_created']),"Y/m/d");  ?></td>
                    <td style="padding-top: 20px;">
                        <?php if ($value['last_updated'][0] == 0) {
                            echo 'N/A';
                        } else {
                            echo $value['last_updated'];
                        } ?>
                    </td>
                    <td style="padding-top: 20px;"><?php echo $value['client_id']; ?></td>
                    <td style="padding-top: 20px;"> 
                        <?php echo $value['project_type'];?>
                    </td>
                    <td>
                        <div>
                            <button class="btn btn-dark">Edit</button>
                            <?php  
                                echo "<button onclick='DeleteRow(" . $value['project_id'] . ")' class='btn btn-danger'>Delete</button>";
                            ?>
                        </div>
                    </td>
                </tr>
                <?php endforeach?>
        </tbody>

        <div class="overlay" id="overlay" hidden></div>
        <div class="form" id="form" hidden>
            <div class="header-form">
                <h5 style="color: white;">Create Project</h5>
                <button onclick="CloseForm()" class="btn btn-danger" style="opacity: 0.8; float: right; margin: 10px;">Close</button>
            </div>
            <input id="name" class="name form-control" type="text" placeholder="Project Name"> <br>
                <textarea id="desc" class="desc form-control" placeholder="Description"></textarea>

                <div style="display: flex; margin-top: 20px;">
                    <input id="client_name" class="client form-control" type="text" placeholder="Client Name">
                    <input id="company" class="client form-control" type="text" placeholder="Company">
                </div>

                <div style="display: flex; margin-top: 20px;" class="control">
                    <input id="location" class="location form-control" type="text" placeholder="Location">
                    <select id="project_type" class="select form-control">
                        <option value="Hourly">Hourly</option>
                        <option value="Fixed">Fixed</option>
                    </select>
                </div>
            <button onclick="CreateProject()"  class="submit btn btn-success">Create Project</button>
        </div>

    </table>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./index.js"></script>

</body>
</html>