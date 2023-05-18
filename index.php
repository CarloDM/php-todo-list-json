
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js" integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  
  <link rel="stylesheet" href="css/style.css">
  <title>vue-todolist</title>
</head>
<body>
  
  <div id="app" class="main_wrapper">
    <div class="container" :class="cardColor">

      <header>
        
        <div class="card_bg_colors">
          <div @click.stop="cardColor = 'clrPalette0'" class="bgColorBox clrPalette0"></div>
          <div @click.stop="cardColor = 'clrPalette1'" class="bgColorBox clrPalette1"></div>
          <div @click.stop="cardColor = 'clrPalette2'" class="bgColorBox clrPalette2"></div>
          <div @click.stop="cardColor = 'clrPalette3'" class="bgColorBox clrPalette3"></div>
          <div @click.stop="cardColor = 'clrPalette4'" class="bgColorBox clrPalette4"></div>
          <div @click.stop="cardColor = 'clrPalette5'" class="bgColorBox clrPalette5"></div>
        </div>

        <h1>To do list</h1>

        <div id="userInput">

          <input
            @keyup.enter="pressEnter"
            v-model="inputTsk"
            id="inText"
            type="text">

            <select name="priority" id="inPriority"
              v-model="inputPriority">
              <option value='0'>1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
            </select>

            <select name="colors" id="inColor"
              v-model="inputColor">
              <option value="task_bg1">white</option>
              <option value="task_bg2">red</option>
              <option value="task_bg3">green</option>
              <option value="task_bg4">yellow</option>

            </select>

        </div>



        <p class="errorMsg">
          {{errorMsg}}

          <button 
          @click.stop="sortTasks()"
          >
          ordina
        </button>
        
        </p>

      </header>

      <main>
        <ul class="">

          <li
            v-for="(task, index) in tasks"  
            class="task"
            :class="task.bgColor, {'done' : task.done}"
            @click="doneToggle(tasks[index])">

            <div class="text_container">
              <span class="task_text">
                {{task.text}}
              </span>
            </div>

            <div  @click.stop="" class="taskOptions">

              <div class="priority_container">
                <span @click.stop="next(index)" class="priority ">
                  {{parseInt(tasks[index].priority) + 1}}
                </span>
  
              </div>
  
              <div class="bg_container">
                <div class="clrBoxContainer ">
                  <div @click.stop="task.bgColor = 'task_bg1' " class="clrBox task_bg1"></div>
                  <div @click.stop="task.bgColor = 'task_bg2' " class="clrBox task_bg2"></div>
                  <div @click.stop="task.bgColor = 'task_bg3' " class="clrBox task_bg3"></div>
                  <div @click.stop="task.bgColor = 'task_bg4' " class="clrBox task_bg4"></div>
                </div>
              </div>
  
              <div class="cancel_container">
                <span  v-if="task.done" @click.stop="cancel(index)" class="cancel ">
                  &#10007
                </span> 
              </div>
            </div>

          </li>

        </ul>
      </main>

    </div>
  </div>

  <script src="js/script.js"></script>
</body>
</html>