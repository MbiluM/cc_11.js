// Task 1 - Created Book Class
class Book {
    constructor(title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() { //method that returns formatted string
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity){ //method that modifies the available copies
        this.copies += quantity;
    }
};

// Task 2 - Created Borrower Class
class Borrower{
    constructor(name, borrowerId, borrowedBooks){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = borrowedBooks;
    }
    borrowBook(book) { 
        if (book.copies > 0) { //Check if copies are available
            this.borrowedBooks.push(book); //Add to "borrowedBooks" array
            book.updateCopies(-1);//Decrease the available copies
        } else {
            console.log(`Unfortunatly, ${book} is out of stock.`); //return if no book
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1); // Remove the book from borrowedBooks array
            book.updateCopies(1); // Increase the available copies
        } else {
            console.log(`"${book.title}" was not borrowed by this person.`);
        }
    }  
};

// Task 3 - Creating Library Class
class Library {
    constructor() {
        this.books = books;
        this.borrower = borrower;
    }
    addBook(book) { //add a book to the library
        this.books.push(book);
    }
    listBooks() {  //list all books' details
        this.books.forEach(book => {
            console.log(book.getDetails());
        })
    }
};

//Task 4 - Implemented Book Borrowing
lendBook(BorrowerId, isbn)   // Find the borrower by their ID
    const Borrower = this.Borrowers.find(b => BorrowerId === BorrowerId);
    (Borrower) => {
        console.log(`Borrower with ID ${BorrowerId} not found.`);
    }

// Task 5 - Implemented Book Returns
    returnBook(borrowerId, isbn) // Find the borrower by their ID
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        if (borrower) {
            console.log(`Borrower with ID ${borrowerId} not found.`);
        }


// Tests 1-5
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
    
book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
    
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
    
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
    
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
    
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"

console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

console.log(borrower1.borrowedBooks);
// Expected output: []

// most difficult task so far