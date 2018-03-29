import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modalShouldBeVisible:boolean = false;
  

  showModal(e) { 
    e.preventDefault();
    this.modalShouldBeVisible = true; 
  }

  closeModal(){
    this.modalShouldBeVisible = false;
  }
}



