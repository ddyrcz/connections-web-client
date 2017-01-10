import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  avaratUrl = 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg';
  comment = 
        {
        'commentatorAvatar': 'http://www.niksebastian.com/wp-content/uploads/2014/05/sample-2-sm.jpg',
        'date': '12.12.2016', 'content': 'Great! soooooooooooooooooooooooooooooooooooooooooooooooooooooo loooooooooooooooooooooooooooooong',
        'commentatorName': 'Dawid', 'commentatorLastname': 'Dyrcz'
      };


      onCommentAdd(comment : string){
        console.log(comment);
        
      }

}
