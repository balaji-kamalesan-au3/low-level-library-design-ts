"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(details) {
        this.name = details.name;
        this.year = details.year;
        this.author = details.author;
        this.genre = details.genre;
        this.id = String(Math.random() * 100) + String(new Date);
    }
    Object.defineProperty(Book.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setYear", {
        set: function (year) {
            this.year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setAuthor", {
        set: function (author) {
            this.author = author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "setGenre", {
        set: function (genre) {
            this.genre = genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getAuthor", {
        get: function () {
            return this.author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getGenre", {
        get: function () {
            return this.genre;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
exports.Book = Book;
