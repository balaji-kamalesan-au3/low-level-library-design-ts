"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var Library = /** @class */ (function () {
    function Library(name, location) {
        this.name = name;
        this.location = location;
        this.books = [];
        this.bookLength = 0;
    }
    Object.defineProperty(Library.prototype, "availableBooks", {
        get: function () {
            return this.bookLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "getLocation", {
        get: function () {
            return this.location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "setLocation", {
        set: function (location) {
            this.location = location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "addBooks", {
        set: function (book) {
            this.books.push(book);
            this.bookLength++;
            this.getBooks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "updateBooks", {
        set: function (books) {
            this.books = __spreadArray([], books, true);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "getBooks", {
        get: function () {
            return this.books;
        },
        enumerable: false,
        configurable: true
    });
    Library.prototype.deleteBook = function (id) {
        var index = this.books.map(function (book) { return book.getId; }).filter(id);
        this.updateBooks = this.books.splice(index[0], 1);
    };
    return Library;
}());
var newLibrary = new Library("Test Library", "Chennai");
var books = [
    {
        name: "Be like monk",
        author: "Gaurav Gopal Das",
        year: 2012,
        genre: "Action"
    },
    {
        name: "Be like monk 1",
        author: "Gaurav Gopal Das",
        year: 2016,
        genre: "Horror"
    },
];
var books1 = books.map(function (book) { return new book_1.Book(book); });
books1.map(function (book) {
    newLibrary.addBooks = book;
});
console.log(newLibrary.availableBooks);
console.log(newLibrary.getBooks);
