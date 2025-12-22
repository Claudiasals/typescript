import type { Todo } from './types.js';

const todos: Todo[] = []; 
// Todo[] = “lista di Todo” , cioè gli diciamo che sarà formato da più di un Todo
// = [] inizializzo la variabile con un array vuoto ( com lista vuota)

/* Aggiungere una Funzione per Aggiungere un Todo
Crea una funzione addTodo che prende un titolo come parametro 
e restituisce un nuovo oggetto Todo con un id unico 
e completed impostato su false. Aggiungi il nuovo Todo all'array todos.
*/

function addTodo(title: string): Todo {
// title come parametro xke è l’unico valore che l’utente deve fornire, 
// perché ogni Todo ha un titolo diverso che imposterà l'utente

    const newTodo: Todo = {
        id: Date.now() + Math.floor(Math.random() * 1000), 
        // genera un id unico basato sul timestamp corrente ( Date.now) + numero casuale (Math.random)
        title: title, // titolo passato come parametro
        completed: false // inizialmente non completato
    };

    todos.push(newTodo); // Aggiunge newTodo alla fine dell’array todos
return newTodo;
}

//? funzione per abbinare user e todo (serve in previsione della creazione del database?)
/* - impostiamo i parametro todoId (cioè l'id di un todo specifico creato dall'utente)
- gli diciamo di scorrere i todo (t.id) e di trovare quello con todoId (xke la funz. 
conosce solo l'id)
- ora che abbiamo preso il todo */
function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId); 
    // Cerco nell’array "todos" l’oggetto che ha un id uguale all'id (todoId) passato alla funzione.
    if (todo) { // se hai trovato un todo con quell'id
        todo.userId = userId; /* prendi l’oggetto Todo che hai trovato e 
        imposta la sua proprietà "userId?" uguale all’"id" dell’utente che vogliamo associare. */
    }
}
/* 
La funzione modifica direttamente l’oggetto Todo nell’array todos
Non serve restituire nulla, perché l’aggiornamento avviene “in place”.
Quindi si usa : void per indicare che non c’è return utile.

“In place” significa che l’oggetto originale viene modificato 
direttamente, senza creare una nuova copia.
*/

//? TEST ASSEGNAZIONE UTENTE
const newTodo = addTodo("Nuovo todo");
const newTodo2 = addTodo("Nuovo todo 2");
const newTodo3 = addTodo("Nuovo todo 3");
const userId = 101; // scegli un numero a caso per simulare un utente
assignTodoToUser(newTodo.id, userId); // todoId in console.log
assignTodoToUser(newTodo2.id, userId); // todoId in console.log
assignTodoToUser(newTodo3.id, userId); // todoId in console.log

console.log(todos);


//@ Funzione per ottenere i Todo di un Utente
function getUserTodos(userId: number) {
return todos.filter(todo => todo.userId === userId);
// filter ci restituisce un array e cercando tutti i todo con 
// l'userId di riferimento creiamo l'array con tt i todos dell'utente
}

//? verifica
console.log(getUserTodos(userId)); // chiamo la funzione passando userId(101)

//@ Funzione error con msg cm parametro e never x err
function error(message: string): never {
    throw new Error(message);
      
}     try {
    error("Qualcosa è andato storto!");
  } catch (e: any) {
    console.log("Errore catturato:", e.message);
  }
  
  console.log("Continua da qui");

/* 
//# A cosa serve never?
Indicare funzioni che non restituiscono mai un valore
Es: funzioni che lanciano sempre un errore o che non terminano mai
TypeScript sa così che il chiamante non potrà mai ottenere un valore 
da quella funzione.

throw new Error(message) interrompe immediatamente 
l’esecuzione della funzione. La funzione non restituisce 
mai un valore come farebbe un return. L’oggetto 
Error viene “lanciato” al runtime, non viene passato come valore di ritorno.

try catch permettono di individuare l'errore e gestirlo proseguendo con il codice
*/