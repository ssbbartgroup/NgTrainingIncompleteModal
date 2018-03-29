import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  constructor() {}

  @ViewChild('firstFocusTarget') firstFocusTarget:ElementRef;
  @ViewChild('lastFocusTarget') lastFocusTarget:ElementRef;
  @Output() modalCloseButtonActivated = new EventEmitter<boolean>();

  //Begin keyboard trapping methods
  handleShiftTabOnFirstFocusTarget(e){
    e.preventDefault();
    this.lastFocusTarget.nativeElement.focus();
  }
  
  handleTabOnLastFocusTarget(e){
    e.preventDefault();
    this.firstFocusTarget.nativeElement.focus();
  }

  handleShiftTabOnLastFocusTarget(e){
    e.preventDefault();
    this.firstFocusTarget.nativeElement.focus();
  }
  //End keyboard trapping methods
  
  signalModalClose(){
    this.modalCloseButtonActivated.emit(true);
    console.log('in signalModalClose');
  }

  ngOnInit() {
      this.firstFocusTarget.nativeElement.focus();
      console.log(this.firstFocusTarget);
      console.log(this.lastFocusTarget);
      
  }

}
