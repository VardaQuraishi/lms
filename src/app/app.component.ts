import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To App';
  name = 'Asad';
  var = 'two way data binding';

  save(){
    alert("clicked");
  }
}
