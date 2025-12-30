
// Interfaccia del singolo Todo
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; 
    metadata2?: string | object;
    status: TodoStatus;
}

// interfaccia dell'user
export interface User {
    id: number;
    name: string,
    email?: string; // il ? indica che la proprietà è opzionale
    readonly todos: ReadonlyArray<Todo>;
}

//# OPERATORE DI OPZIONALITA' "?" 
// Serve per dichiarare una proprietà opzionale. 
// Significa che l’oggetto può avere o non avere quella proprietà.

//@ uso extends per crare interface con metadata
export interface TodoWithMetadata extends Todo {
    metadata: any;
}

//# EXTENDS: ereditarietà delle interfacce 
/* creare nuovi tipi o interfacce basati su altri, 
aggiungendo o modificando proprietà.
Si usa extends per dire: “Prendi tutte le proprietà 
di questa interfaccia e aggiungine altre.”
Ci permettono di riutilizzare codice e tipi senza riscrivere tutto.
*/

// interfaccia Project
export interface Project {
    users: User[];
    todos: Todo[];
}


//# ENUM TYPE
/* 
è un tipo speciale che serve a definire un insieme di valori costanti 
con nomi chiari, invece di usare semplici stringhe o numeri sparsi 
nel codice. In pratica, un enum ti permette di dare nomi leggibili 
a valori fissi, così il codice diventa più chiaro e sicuro.
*/

enum TodoStatus {
    Pending = "Pending", 
    InProgress = "InProgress",
    Completed = "Completed"
 }
 
 /* 
 TodoStatus.Pending è "Pending"
 TodoStatus.InProgress è "InProgress"
 TodoStatus.Completed è "Completed"
 */