<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $response = [
        "title" => "Hello from PHP via Laragon!",
        "message" => "Dynamic content from PHP at " . date("h:i:s A")
    ];

    echo json_encode($response);
?>
