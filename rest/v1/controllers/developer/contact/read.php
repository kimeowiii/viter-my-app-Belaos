<?php
// check db connection d
$conn = null;
$conn = checkDatabaseConnection();


// use models

$contact = new Contact($conn);


// if(array_key_exist('id, $_GET')){
// $webServices
// }
if (empty($_GET)) {
    $query = checkReadAll($contact);
    http_response_code(200);
    getQueriedData($query);
}