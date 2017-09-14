import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Set Timeout';
  @Input() time: number;
  timer = 0;

  startTimer(){
    let s = 0;
    setTimeout((_ => {
      console.log(this.time);
      while(s <= this.time){
        this.timer = this.timer + 1;
        s++;
        console.log("s = " + s);
      }
    }),
    1000);
  };

}
