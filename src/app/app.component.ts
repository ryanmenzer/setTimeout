import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Set Timeout';
  time = 0;

  startTimer(value){
    while(this.time < value){
      setTimeout(
        this.time++,
        1000
      )
    };
  };

}
