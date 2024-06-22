/*
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/


// START task

class Book {
    title = "Unknown Title";
    author = "Unknown Author";
    pages = 0;

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}

// END task

// Пример использования
const book1 = new Book();
book1.title = "The Great Gatsby";
book1.pages = 218;
book1.displayInfo();

const book2 = new Book();
book2.title = "Harry Potter and the Philosopher's Stone";
book2.author = "J.K. Rowling";
book2.displayInfo();
