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