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
        this.available = details.available | 0;
        this.rentedOut = details.rentedOut | 0;
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
    Object.defineProperty(Book.prototype, "getAvailability", {
        get: function () {
            return this.available;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.rentOutBook = function () {
        if (this.getAvailability > 0) {
            this.available--;
            this.rentedOut++;
            return true;
        }
        else {
            throw new Error("Book is Not Available");
        }
    };
    Book.prototype.collectBook = function () {
        this.available++;
        this.rentedOut--;
    };
    return Book;
}());
exports.Book = Book;
