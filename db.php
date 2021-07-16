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