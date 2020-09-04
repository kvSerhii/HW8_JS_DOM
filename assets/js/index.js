'use strict'

class Stack {
    constructor(maxSize = 1000) {
        if (typeof maxSize !== 'number') {
            throw new TypeError('Size must be a number');
        }
        if (maxSize < 1) {
            throw new RangeError("must be a positiv number");
        }
        this._maxSize = maxSize;
        this._size = 0;
    }

    get maxSize() {
        return this._maxSize;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    push(value) {
        if (this.size >= this.maxSize) {
            throw new RangeError("Stack overflow");
        }
        this[this.size++] = value;
        return this.size;
    }

    pop() {
        if (this.isEmpty) {
            return "Underflow";
        }
        const deletedElement = this[--this.size];
        delete this[this.size];
        return deletedElement;
    }

    clear() {
        debugger
        while (this._size) {
            delete this[--this.size];
            console.log(this);
        }

        return this._size;
    }

    peek() {
        if (this.isEmpty) {
            return;
        }
        return this[this.size - 1];
    }
}

let stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);
stack.push(44);

// console.log(stack);

// 1) Написать функцию, которая проверяет строку на
// правильность скобочной последовательности. Скобки могут быть любые.
// В реализации использовать структуру данных Stack.

const str = "()";

//v2
function bracketMatching(string) {
    if (string[0] === ')' || string[0] === ']' || string[0] === '}' ||
        (string.length % 2 !== 0)) {
        return false;
    } else {
        let st1 = new Stack();

        for (const indx of string) {
            if (indx === '(' ||
                indx === '[' ||
                indx === '{') {

                st1.push(indx);
            } else {
                if (indx === '}' && st1.peek() !== '{') {
                    return false;
                }
                if (indx === ']' && st1.peek() !== '[') {
                    return false;
                }
                if (indx === ')' && st1.peek() !== '(') {
                    return false;
                }
                console.log(indx);
                st1.pop();
            }
        }
        return true;
    }
}
let tStart = performance.now();
console.log(bracketMatching(str));
console.log(performance.now() - tStart);

//v1
// function perCheck(string) {
//     const stack = new Stack(string.length);
//     if (string.length === 0 || string[0] === ')' ||
//         string.length % 2 !== 0) {
//         return false;
//     }
//     for (const letter of string) {

//         if (letter === '(') {
//             stack.push(letter);
//         } else {
//             stack.pop();
//         }
//     }
//     if (stack.isEmpty) {
//         return true;
//     }
//     return false;
// }

// console.log(perCheck('()()()'));