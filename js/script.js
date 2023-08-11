const { createApp } = Vue ;

createApp({
  data(){
    return {

      tasks: [],

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
        console.log(result.data);
        this.tasks = result.data;
      })
    },
    addTask(){
      const data = new FormData();
      data.append('test', this.newTask.text);
      data.append('done', false);
      data.append('bgColor', this.newTask.bgColor);
      data.append('priority', this.inputPriority);
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
        // serve una POST per cancellare by id ma l oggetto task ha bisogno dell attributo id
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