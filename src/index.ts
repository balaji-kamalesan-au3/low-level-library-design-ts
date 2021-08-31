import { Book, BookInterface } from "./book";



class Library {
    private name : string;
    private location : string;
    private books : Book[];
    private bookLength:number;
    constructor(name : string,location : string) {
        this.name = name;
        this.location = location;
        this.books = [];
        this.bookLength = 0;
    }

    public get availableBooks(){
        return this.bookLength;
    }

    public get getName(){
        return this.name;
    }

    public get getLocation(){
        return this.location;
    }

    public set setName(name: string){
        this.name = name
    }

    public set setLocation(location: string){
        this.location = location;
    }

    public set addBooks(book){
        
        this.books.push(book);
        this.bookLength++;
        this.getBooks;
    }

    private set updateBooks(books : Book[]){
        this.books = [...books]
    }
    public get getBooks(){
        return this.books;
    }

    deleteBook(id){
        const index = this.books.map(book => book.getId).filter(id);
        this.updateBooks = this.books.splice(index[0],1)
    }
}

const newLibrary = new Library("Test Library","Chennai");

const books = [
    {
        name : "Be like monk",
        author : "Gaurav Gopal Das",
        year : 2012,
        genre : "Action"
    },
    {
        name : "Be like monk 1",
        author : "Gaurav Gopal Das",
        year : 2016,
        genre : "Horror"
    },
]


const books1 = books.map(book => new Book(book))

books1.map(book => {
    newLibrary.addBooks = book
})

console.log(newLibrary.availableBooks);
console.log(newLibrary.getBooks);



