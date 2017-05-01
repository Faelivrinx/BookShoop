import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../../services/add-book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

	private newBook: Book = new Book();
	private bookAdded: boolean;


  constructor(private addBookService: AddBookService) { }

  onSubmit(){
  	this.addBookService.sendBook(this.newBook).subscribe(
  			res =>{
  				this.bookAdded = true;
          this.newBook = new Book();
          this.newBook.active = true;
          this.newBook.category= "Managment";
          this.newBook.language= "English";
          this.newBook.format = "paperback";

  			}, error => {
  				console.log(error);
  			}
  		)
  }

  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.category= "Managment";
    this.newBook.language= "English";
    this.newBook.format = "paperback";
  }

}
