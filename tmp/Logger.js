"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
function getCurrentTimestamp() {
    return new Date().toISOString();
}
class Logger {
    constructor() {
    }
    static log(message) {
        console.log(message);
    }
    static error(message) {
        console.error(message);
    }
    static warn(message) {
        console.warn(message);
    }
}
exports.Logger = Logger;
