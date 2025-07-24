<?php

// check database
$conn = null;
$conn = checkDatabaseConnection();

// use models
$testimonials = new Testimonials($conn);

if (array_key_exists('id', $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$testimonials->testimonials_is_active = 1;
$testimonials->testimonials_image = checkIndex($data, 'testimonials_image');
$testimonials->testimonials_description = checkIndex($data, 'testimonials_description');
$testimonials->testimonials_name = checkIndex($data, 'testimonials_name');
$testimonials->testimonials_position = checkIndex($data, 'testimonials_position');
$testimonials->testimonials_created = date("Y-m-d H:i:s");
$testimonials->testimonials_updated = date("Y-m-d H:i:s");

$query = checkCreate($testimonials);
returnSuccess($testimonials, "testimonials create", $query);
