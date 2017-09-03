import { Component } from '@angular/core';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedField = 'name';
  dataArr = [
    {
      name : 'Aditya',
      city : 'Mumbai',
      mobile : '1234567899',
      age : 10
    },
    {
      name : 'Vikas',
      city : 'Hisar',
      mobile : '2123456789',
      age : 50
    },
    {
      name : 'Rishi',
      city : 'Banglore',
      mobile : '3123456789',
      age : 30
    }
  ];

  setFieldName(name) {
    if (this.selectedField === name) {
      this.selectedField = '-' + this.selectedField;
    } else {
      this.selectedField = name;
    }
  }

}
