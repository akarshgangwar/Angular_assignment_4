import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
oddList:number[]=[];
evenList:number[]=[];



  buttonclicked(currentValue:number)
  {
    if(currentValue%2 ===0)
    {
      this.evenList.push(currentValue);
    }
    else
    this.oddList.push(currentValue);
  }

  title = 'Assignment_5';
}
