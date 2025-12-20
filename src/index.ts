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

    const newTodo: Todo = {
        id: Date.now(), // genera un id unico basato sul timestamp corrente
        title: title, // titolo passato come parametro
        completed: false // inizialmente non completato
    };

    todos.push(newTodo); // Aggiunge newTodo alla fine dell’array todos
return newTodo;
}

addTodo("Nuuovo todo");
console.log(todos);