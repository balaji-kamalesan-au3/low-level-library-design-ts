
export interface BookInterface{
    name: string,
    author: string,
    year: number,
    genre: string,
    available?:number,
    rentedOut?:number
}

export class Book {
    private name;
    private year;
    private author;
    private genre;
    private id;
    private available;
    private rentedOut;
    constructor(details: BookInterface) {
        this.name = details.name;
        this.year = details.year;
        this.author = details.author;
        this.genre = details.genre;
        this.id = String(Math.random() * 100) + String(new Date);
        this.available = details.available | 0;
        this.rentedOut = details.rentedOut | 0;
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
    get getAvailability(){
        return this.available
    }

    public rentOutBook(){
        if(this.getAvailability > 0){
            this.available--;
            this.rentedOut++;
            return true;
        }
        else { 
            throw new Error("Book is Not Available");
        }
    }

    public collectBook(){
        this.available++;
        this.rentedOut--;
    }
}