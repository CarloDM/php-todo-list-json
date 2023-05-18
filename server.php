<?php 

  $tasks = [
    ['text'  =>
        'è possibile cambiare colore generale nella barra arcobaleno',
        'done' => false, 'bgColor'  => 'task_bg1', 'priority' =>'3'],
    ['text'  =>
        'le task sono ordinate in base alla priorità',
        'done' => false, 'bgColor'  => 'task_bg3', 'priority' =>'2'],
    ['text'  =>
        'è possibile variare colore e priorità per ogni task gia inserita',
        'done' => false, 'bgColor'  => 'task_bg4', 'priority' =>'1'],
    ['text'  =>
        'l icona per cancellare compare solo se hai completato la task',
        'done' => true, 'bgColor'  => 'task_bg2', 'priority' =>'0'],
  ];

$json_string = json_encode($tasks);

file_put_contents('tasks.json', $json_string);

// header('Content-Type: application/json');

// echo json_encode($arrayprova);

?>