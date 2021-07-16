
function CloseForm() {
    $("#name").val('');
    $("#desc").val('');
    $("#client_name").val('');
    $("#location").val('');
    $("#company").val('');
    $("#name").val('');
    $("#project_type").val('');

    document.getElementById('form').hidden = true;
    document.getElementById('overlay').hidden = true;

}
function OpenForm() {
    document.getElementById('form').hidden = false;
    document.getElementById('overlay').hidden = false;
}


function GetAllElements() {
    $.ajax({
        url: '../proj/db.php',
        success: function(data) {
            $('.result').html(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function CreateProject() {
    $.post({
        url: '../proj/classes/insert_class.php',
        data: { 
            project: {
                project_name: $("#name").val(),
                description: $("#desc").val(),
                client_name: $("#client_name").val(),
                company: $("#company").val(),
                location: $("#name").val(),
                project_type: $("#project_type").val()
            }
         },
        success: function() {
            GetAllElements();
            CloseForm();
        },
        error: function(err) {
            CloseForm();
            console.log(err);
        }
    });
}

function DeleteRow(val) {
    $.post({
        url: '../proj/classes/delete_class.php',
        data: {
            index: val
        },
        success: function() {
            GetAllElements();
        },
        error: function(err) {
            console.log(err);
        }
    });
}