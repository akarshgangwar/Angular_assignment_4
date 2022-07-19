import { LiteralArray } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() eventInterval =new EventEmitter<number>();
 referanceStore;
 counter=1

 
  constructor() { }

  ngOnInit(): void {
  }


  startTheGame(){

    this.referanceStore=setInterval(()=>{
      this.eventInterval.emit(this.counter++);
    },1000);
   
  }

  stopTheGame(){
    
    clearInterval(this.referanceStore);
  

}

}