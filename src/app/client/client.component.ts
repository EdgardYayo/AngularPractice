import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  username = ''
  clickedCount = 0;
  appear = false;
  clickLogs = [];
  secret = "I'm learning directives";

  onEmptyUsername(){
      this.username = '';
  }

  onClickButton() {
    this.appear = !this.appear;
    this.clickedCount++;
    this.clickLogs.push(this.clickedCount);
    console.log(this.clickLogs);
    
  }


}
