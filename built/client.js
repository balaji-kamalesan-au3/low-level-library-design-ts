"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(client) {
        this.name = client.name;
        this.id = client.id;
        this.booksTaken = [];
        this.pastBooks = [];
    }
    Object.defineProperty(Client.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getBooksIssued", {
        get: function () {
            return this.booksTaken.map(function (book) { return book.getName; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getClientId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "getPastBooks", {
        get: function () {
            return this.pastBooks;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.addBook = function (bookToAdd) {
        if (this.booksTaken.filter(function (book) { return book.getName === bookToAdd.getName; }).length > 0) {
            throw new Error("You have taken the book already");
        }
        else {
            if (bookToAdd.rentOutBook()) {
                this.booksTaken.push(bookToAdd);
                return true;
            }
            else {
                throw new Error("Book Not Available");
            }
        }
    };
    return Client;
}());
exports.Client = Client;
