
type BookType = "Romance" | "Horror"

export interface BookInterface{
    name: string,
    author: string,
    year: number,
    genre: string,
}

export class Book {
    private name;
    private year;
    private author;
    private genre;
    private id;
    constructor(details: BookInterface) {
        this.name = details.name;
        this.year = details.year;
        this.author = details.author;
        this.genre = details.genre;
        this.id = String(Math.random() * 100) + String(new Date)
    }

    set setName(name){
        this.name = name
    }
    set setYear(year){
        this.year = year
    }
    set setAuthor(author){
        this.author = author
    }
    set setGenre(genre){
        this.genre = genre
    }

    get getId(){
        return this.id
    }
    get getName(){
        return this.name
    }

    get getAuthor(){
        return this.author
    }

    get getYear(){
        return this.year
    }
    get getGenre(){
        return this.genre
    }
}