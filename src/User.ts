import type { Todo } from './types.js'; // importa il tipo Todo

export class User {
  id: number;
  name: string;
  email?: string;
  todos: Todo[]; // array dei Todo dell'utente

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.todos = []; // inizializziamo l'array vuoto
  }

  // metodo per aggiungere un Todo all'utente
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
