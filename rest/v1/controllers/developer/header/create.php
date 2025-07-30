<?php

//db variable
$conn = null;
//connect to db and store in conn variable
$conn = checkDatabaseConnection();

//use models
$header = new Header($conn);


//no id shsall pass = gate
if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

//check data
checkPayload($data);
// returnError('NAGANA');
$header->header_is_active = 1;
$header->header_name = checkIndex($data, 'header_name');
$header->header_link = checkIndex($data, 'header_link');
$header->header_created = date("Y-m-d H:i:s");
$header->header_updated = date("Y-m-d H:i:s");

isNameExist($header, $header->header_name);

$query = checkCreate($header);
returnSuccess($header, 'header_create', $query);
