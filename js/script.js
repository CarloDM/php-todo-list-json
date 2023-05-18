const { createApp } = Vue ;

createApp({
  data(){
    return {

      tasks: [
        // {text :
        //     'è possibile cambiare colore generale nella barra arcobaleno',
        //     done: false, bgColor : 'task_bg1', priority:'3'},
        // {text :
        //     'le task sono ordinate in base alla priorità',
        //     done: false, bgColor : 'task_bg3', priority:'2'},
        // {text :
        //     'è possibile variare colore e priorità per ogni task gia inserita',
        //     done: false, bgColor : 'task_bg4', priority:'1'},
        // {text :
        //     'l icona per cancellare compare solo se hai completato la task',
        //     done: true, bgColor : 'task_bg2', priority:'0'},
      ],

      newTask : {text : '', done: false, bgColor : '', priority:''},

      inputTsk : '',
      inputPriority : 0,
      cardColor :'clrPalette0',
      inputColor : 'task_bg1',
      errorMsg : '',
      prova : 'prova',
      serverUrl: 'server.php'
    }
  },

  methods: {
    readList(){
      axios.get(this.serverUrl)
      .then(result => {
        console.log(result.data)
        this.tasks = result.data
      })
    },
    addTask(){
      // // this.tasks.push(this.newTask);
      // const data = {
      //   toDo : this.prova,
      // }
      // axios.post(this.serverUrl, data, {
      //   headers:{'Content-Type' : 'multipart/from-data'}
      // }).then(result => {
      //   // this.tasks = result.data;
      //   console.log('ricevo dopo l aggiunta' ,this.tasks);
      // })

      const data = new FormData();
      data.append('test', this.newTask.text);
      data.append('done', false);
      data.append('bgColor', this.newTask.bgColor);
      data.append('priority', this.inputPriority);
      // data.append('toDo', this.test2);
      axios.post(this.serverUrl, data)
      .then(result => {
        this.tasks = result.data;
        console.log('ricevo dopo l aggiunta' , result.data);
      })
    },

    pressEnter(){
      this.newTask = {text : '', done: false, bgColor : '', priority:''}     
      this.newTask.text = this.inputTsk;
      this.newTask.bgColor = this.inputColor;
      this.newTask.priority = this.inputPriority;
      this.inputTsk ='';
      console.log('press enter',parseInt(this.inputPriority),this.inputColor, this.newTask );
      // this.tasks.push(this.newTask)
      // this.sortTasks();
      // console.log(this.newTask);
      this.addTask();
    },

    doneToggle(ind){
      ind.done = !ind.done;    
      console.log('doneToggle',ind)
    },

    cancel(ind){
      if (this.tasks[ind].done){
        console.log(this.tasks[ind].done)
        this.tasks.splice(ind,1);
        this.errorMsg = ''
      }else {
        this.errorMsg = 'devi completare la task prima di poterla cancellare';
        console.log('not',ind)
      }
    },

    next(ind){
      if (parseInt(this.tasks[ind].priority) == 4){
        this.tasks[ind].priority = 0 ;
      } else {
        this.tasks[ind].priority ++
      }
      // this.sortTasks(),
      console.log(this.tasks[ind]);
    },

    sortTasks(){
      this.tasks.sort((a,b) => (a.priority < b.priority) ? 1 : (a.priority > b.priority) ? -1 : 0);
    }

  },

  mounted(){
    this.sortTasks() ;
    this.readList();  
  }
}).mount('#app')