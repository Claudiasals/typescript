import type { Todo } from './types.js';

const todos: Todo[] = [];
// Todo[] = “lista di Todo” , cioè gli diciamo che sarà formato da più di un Todo
// = [] inizializzo la variabile con un array vuoto ( com lista vuota)

/* Aggiungere una Funzione per Aggiungere un Todo
Crea una funzione addTodo che prende un titolo come parametro 
e restituisce un nuovo oggetto Todo con un id unico 
e completed impostato su false. Aggiungi il nuovo Todo all'array todos.
*/

function addTodo(title: string, metadata2: string | object) : Todo { // specifico i parametri
    // title come parametro xke è l’unico valore che l’utente deve fornire, 
    // perché ogni Todo ha un titolo diverso che imposterà l'utente

    const newTodo: Todo = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        // genera un id unico basato sul timestamp corrente ( Date.now) + numero casuale (Math.random)
        title: title, // titolo passato come parametro
        completed: false, // inizialmente non completato
        metadata2: metadata2
    };

    todos.push(newTodo); // Aggiunge newTodo alla fine dell’array todos
    return newTodo;
}

//@ funzione per abbinare user e todo (serve in previsione della creazione del database?)
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

//@ TEST ASSEGNAZIONE UTENTE
const newTodo = addTodo("Nuovo todo", "ciao");
const newTodo2 = addTodo("Nuovo todo 2", "secondo parametro");
const newTodo3 = addTodo("Nuovo todo 3", "secondo parametro obbligatorio");
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

// verifica
console.log(getUserTodos(userId)); // chiamo la funzione passando userId(101)

//@ Funzione error con msg cm parametro e never x err
function error(message: string): never {
    throw new Error(message);

} try {
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

//@ Funzione che prende input unknown
function parseInput(input: unknown): string {
    // : string --> x dire che la funzione può restituire solo una stringa 
    // con unknown bisogna 
    if (typeof input === "string") { // branch 1
        return input;

    } else if (typeof input === "number") { // branch 2
        return input.toString();

    } else { 
        error("Tipo di input non valido") // branch 3
}
}

//# BRANCH:
/* In Typescript un branch è ogni possibile percorso di esecuzione 
dentro una struttura condizionale (if, else if, else).
*/

//# tipo ANY: 
// è un tipo speciale che diaattiva il controllo dei tpi.
// serve quando non conosci a priori il tipo di una variabile 
// o vuoi permettere di assegnarci qualsiasi valore.
// Usare any riduce la sicurezza dei tipi e va usato solo quando necessario.

//# Union Type (|):
/* Un Union Type è un tipo che può essere uno oppure un altro.
Il simbolo | ("oppure" ce definisce il union type) significa: questa 
variabile può essere uno di questi tipi. 
*/

//@ funione per aggiornare parzialmente le proprietà di un ToDo

/* Per aggiornare un Todo parzialmente utilizzo Partial<Todo> che rende tutte le 
proprietà opzionali e permette di passare solo e proprietà che vogliamo modificare */
const updates: Partial<Todo> = { title: "Nuovo titolo" };
// posso aggiornare solo "title", senza dover specificare id o completed


function updateTodo(todoId: number, updates: Partial<Todo>): Todo | undefined {
    /* todoId: number è il parametro obbligatorio x l’ID del Todo che vogliamo aggiornare.
    / updates: Partial<Todo> è l'oggetto con le proprietà da aggiornare (tutte opzionali).
    / : Todo | undefined → tipo di ritorno della funzione: restituisce il Todo aggiornato 
    oppure undefined se non esiste. */
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return undefined; 
    Object.assign(todo, updates);
    return todo; // restituisce l'oggetto todo aggiornato
}

    //# Object.assign
    /* è una funzione built-in di JavaScript che serve a copiare proprietà 
    da uno o più oggetti dentro un altro oggetto.
    In questo caso: serve per aggiornare un oggetto esistente senza crearne uno nuovo
    Copiando tutte le proprietà di updates dentro todo e solo le 
    proprietà presenti in updates vengono aggiornate.
    */
    //! Nota: Object.assign modifica l’oggetto originale, 
    //! quindi l’array todos viene aggiornato “in place” 

    //# in place: 
    /* significa che modifichi l’oggetto originale direttamente, senza crearne una copia nuova
    Quando fai un’operazione in place:
    l’oggetto è lo stesso in memoria
    cambiano solo alcune sue proprietà
    non viene creato un nuovo oggetto */


//# Utility Types
/* In TypeScript esistono dei tipi speciali predefiniti chiamati utility types, 
che ti permettono di modificare o derivare altri tipi senza riscrivere tutto.

Esempi utili per questo esercizio:

Utility Type	Cosa fa	Esempio
Partial<T>	Rende tutte le proprietà di T opzionali	Partial<Todo>
Required<T>	Rende tutte le proprietà obbligatorie	Required<Todo>
Readonly<T>	Rende tutte le proprietà non modificabili	Readonly<Todo>
Pick<T, K>	Prende solo alcune proprietà K di T	`Pick<Todo, "title"
Omit<T, K>	Esclude alcune proprietà K di T	Omit<Todo, "metadata">

*/

//@ funzione che restituisce una tupla con titolo e stato

function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed];
}

//# tupla:
/* una tupla è un tipo speciale di array in cui ogni elemento 
ha un tipo specifico e un ordine fisso. In altre parole:
Un array normale può contenere valori di qualsiasi tipo, 
oppure tutti dello stesso tipo, senza vincoli sull’ordine.
Una tupla ti dice: “Il primo elemento sarà di questo tipo, 
il secondo sarà di quest’altro tipo, e così via”. */