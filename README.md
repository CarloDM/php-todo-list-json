**Descrizione**
Dobbiamo creare una web-app che permetta di leggere e scrivere una lista di Todo.
Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.

**Stack**
Html, CSS, VueJS (importato tramite CDN), axios, PHP

**Consigli**
Nello svolgere l’esercizio seguite un approccio graduale.
Prima assicuratevi che la vostra pagina *index.php* (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre “API”).Lo step successivo è quello di “testare” l’invio di un nuovo task, sapendo che manca comunque la persistenza lato server (ancora non memorizzate i dati da nessuna parte).Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.

****
**Bonus**
Mostrare lo stato del task → se completato, barrare il testo
Permettere di segnare un task come completato facendo click sul testo
Permettere il toggle del task (completato/non completato)
Abilitare l’eliminazione di un task






-------
old
-------------------------------------------------------------------------
<!-- **Descrizione:**
Rifare l’esercizio della to do list.

Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)Buon lavoro e buon divertimento!

AUTOBONUS

1- sfondo e task personalizzabile nel colore
2- disposizione in base a priorità -->
