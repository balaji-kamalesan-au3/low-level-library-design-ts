import { Book } from "./book";

interface ClientInterface{
    name : string;
    id : string;
    booksTaken : Book[];
    pastBooks : Book[];
}

export class Client{
    private name : string;
    private id : string;
    private booksTaken : Book[];
    private pastBooks : string[];
    constructor(client : ClientInterface){
        this.name = client.name;
        this.id = client.id;
        this.booksTaken = [];
        this.pastBooks = [];
    }

    get getName(){
        return this.name;
    }

    get getBooksIssued(){
        return this.booksTaken.map(book => book.getName);
    }

    get getClientId(){
        return this.id;
    }

    get getPastBooks(){
        return this.pastBooks;
    }

    public addBook(bookToAdd){
        if(this.booksTaken.filter(book => book.getName === bookToAdd.getName).length > 0 ){
            throw new Error("You have taken the book already")
        }
        else{ 
            if(bookToAdd.rentOutBook()){
                this.booksTaken.push(bookToAdd);
                return true
            }
            else{
                throw new Error("Book Not Available");
            }
        }
    }
}