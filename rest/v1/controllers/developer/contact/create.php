<?php

// check database
$conn = null;
$conn = checkDatabaseConnection();

// use models
$contact = new Contact($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$contact->contact_fullname = checkIndex($data, 'contact_fullname');
$contact->contact_email = checkIndex($data, 'contact_email');
$contact->contact_message = checkIndex($data, 'contact_message');
$contact->contact_created = date("Y-m-d H:i:s");
$contact->contact_updated = date("Y-m-d H:i:s");

$query = checkCreate($contact);
returnSuccess($contact, "contact create", $query);