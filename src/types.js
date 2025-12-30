"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
//# ENUM TYPE
/*
è un tipo speciale che serve a definire un insieme di valori costanti
con nomi chiari, invece di usare semplici stringhe o numeri sparsi
nel codice. In pratica, un enum ti permette di dare nomi leggibili
a valori fissi, così il codice diventa più chiaro e sicuro.
*/
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Pending"] = "Pending";
    TodoStatus["InProgress"] = "InProgress";
    TodoStatus["Completed"] = "Completed";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
/*
TodoStatus.Pending è "Pending"
TodoStatus.InProgress è "InProgress"
TodoStatus.Completed è "Completed"
*/ 
