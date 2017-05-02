import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../../services/add-book.service';
import { UploadImageService } from '../../services/upload-image.service';
import { Book } from '../../models/book';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

	private newBook: Book = new Book();
	private bookAdded: boolean;


  constructor(private addBookService: AddBookService, private uploadImageService: UploadImageService) { }

  onSubmit(){
  	this.addBookService.sendBook(this.newBook).subscribe(
  			res => {
          this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
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
