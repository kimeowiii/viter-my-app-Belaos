<?php

// Set http header
require '../../../core/header.php';

// Use needed functions
require '../../../core/functions.php';

// Use needed functions
require '../../../models/developer/testimonials/Testimonials.php';


$body = file_get_contents('php://input');
$data = json_decode($body, true);


if ($_SERVER['HTTP_AUTHORIZATION']) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
}
checkEndpoint();
