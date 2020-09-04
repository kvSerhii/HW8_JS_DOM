'use strict'

// 2)Сформировать список(структура данных LinkedList) целых чисел, вводимых пользователем,
// в том порядке, в котором вводятся эти числа, но без повторений элементов подряд(!).
// Допустим, пользователь ввёл строку "5455". Тогда:
// 5 4 5 - правильный список
// 5 4 5 5 - не правильный
// console.log('Task 2');

//#region LinkedList
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }
//     addNode(value) {
//         const node = new ListNode(value);
//         if (this.length === 0) {
//             this.head = node; //  скопировали ссылку на объект            
//             this.length++;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             //second
//             if (current.value !== node.value) {
//                 current.next = node;
//                 console.log(current.value, "current"); //  TEST
//                 console.log(current.next.value, "next"); //  TEST                
//                 this.length++;
//             }
//         }
//     }

//     getNodeByIndex(index) {
//         if (this.length === 0 || index < 0 || index > this.length) {
//             throw new RangeError('Not in list');
//         }

//         let current = this.head;
//         let count = 0;

//         while (count < index) {
//             current = current.next;
//             count++;
//         }
//         return current;
//     }

//     [Symbol.iterator]() {
//         return new LinkedListIterator(this);
//     }
// }
// class LinkedListIterator {
//     constructor(list) {
//         this.iterable = list.head;
//     }
//     next() {
//         if (this.iterable) {
//             const value = this.iterable.value;
//             this.iterable = this.iterable.next; //i++
//             return {
//                 value,
//                 done: false,
//             };
//         }
//         return {
//             done: true
//         };
//     }
// }

// // const listIterator = new LinkedListIterator();
// const list = new LinkedList();

// list.addNode(1);
// list.addNode(1);
// list.addNode(2);
// list.addNode(2);
// list.addNode(2);
// list.addNode(3);
// list.addNode(3);

// console.log(list);
// list.getNodeByIndex(0);

// const arrr = [...list];
// console.log(arrr);
//#endregion LinkedList