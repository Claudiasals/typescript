// Interfaccia del singolo Todo
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number; 
}

// interfaccia dell'user
export interface User {
    id: number;
    name: string,
    email?: string; // il ? indica che la proprietà è opzionale
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

