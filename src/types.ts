/* TypeScript
Creare un'Interfaccia Todo
Nella directory src, crea un nuovo file chiamato types.ts. 
Definisci un'interfaccia Todo con le seguenti proprietà: 
- id (number), 
- title (string), 
- completed (boolean). */

// Scrivo la forma dell'oggetto in ts
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}



/* Creare un'Interfaccia Utente
In types.ts, definisci un'interfaccia User con le seguenti proprietà: 
id (number), 
name (string), 
email (string, opzionale).
*/

export interface User {
    id: number;
    name: string,
    email?: string; // il ? indica che la proprietà è opzionale
}