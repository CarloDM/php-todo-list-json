<?php 

$arrayprova = [
  [
    'name' => 'mario',
    'lastName' => 'pallon',
  ],
  [
    'name' => 'perla',
    'lastName' => 'pallon',
  ]
  ];

$json_string = json_encode($arrayprova);

file_put_contents('tasks.json', $json_string);

header('Content-Type: application/json');

echo json_encode($arrayprova);

?>