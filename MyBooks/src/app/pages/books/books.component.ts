import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book[];
  constructor(){
    this.books = [
      new Book('Harry Potter y la Piedra Filosofal','Tapa dura','J.K.Rowling',14.75,'https://imagessl2.casadellibro.com/a/l/t7/62/9788498382662.jpg',756483,1528),
      new Book('Maricón a los cincuenta La vida mártir', 'tapa blanda','Abel Arana', 19.99,'https://www.libreriaberkana.com/media/img/portadas/maricon-a-los-cincuenta_978-84-19728-08-1_JVLmHGi.png',876583,1728),
    ]
  }

  addBook(title:string,type:string,author:string,price:number,photo:string,id_book:number){
    let newBook = new Book(title,type,author,price,photo,id_book,0);
    this.books.push(newBook);
  }

deleteBook(bookTitle:string):void{
  console.log(bookTitle);
  this.books = this.books.filter(book => book.title != bookTitle);
}
}
