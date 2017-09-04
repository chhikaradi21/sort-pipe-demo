# AngularJS 4 Pipe For Sorting
This Pipe can be used with *ngFor directive of AngularJS 4. This has the functionality to sort basic data types of JavaScript.
You can use it just by including in your component and applying on *ngFor directive.

### Features
1. This can be used on tables created via *ngFor.
2. Can sort data in increasing as well as decreasing order.
3. Can be used with multiple data types like string, number, date.

### How it works?
Just apply it like other default pipes with *ngFor and pass selectedField variable on which you want to sort in array of object. For example if you want to sort on age pass it like 'age' for ascending order and pass '-name' for descending order.

Usage:
```
*ngFor="let item of dataArr | sort : selectedField"

```
HTML code
```
 <table class="table">
    <thead>
    <tr>
      <th (click)="setFieldName('name')">Name<span class="glyphicon glyphicon-sort" aria-hidden="true" 
          style="margin-left : 5px"></span></th>
      <th (click)="setFieldName('city')">City<span class="glyphicon glyphicon-sort" aria-hidden="true" 
          style="margin-left : 5px"></span></th>
      <th (click)="setFieldName('mobile')">Mobile<span class="glyphicon glyphicon-sort" aria-hidden="true" 
          style="margin-left : 5px"></span></th>
      <th (click)="setFieldName('age')">Age<span class="glyphicon glyphicon-sort" aria-hidden="true" 
          style="margin-left : 5px"></span></th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of dataArr | sort : selectedField">
      <td>{{item.name}}</td>
      <td>{{item.city}}</td>
      <td>{{item.mobile}}</td>
      <td>{{item.age}}</td>
    </tr>
    </tbody>
  </table>
```

Component JS Code
```
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

```

Filter Code:
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], sortBy: string): any {
    const order = sortBy.charAt(0) === '-' ? 'desc' : 'asc';
    sortBy = order === 'desc' ? sortBy.substr(1) : sortBy;

    const type = arr && arr.length && typeof(arr[0][sortBy]);

    function sortFunction(a, b) {
      if (type !== 'string' && a[sortBy] < b[sortBy] ||
          type === 'string' && a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
        return order === 'asc' ? -1 : 1;
      } else if (type !== 'string' && a[sortBy] > b[sortBy] ||
          type === 'string' && a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
        return order === 'asc' ? 1 : -1;
      } else {return 0};
    };

    return arr.sort(sortFunction);
  }
}
```

### How to run on local
Follow these steps
1. git clone git@github.com:chhikaradi21/sort-pipe-demo.git
2. cd sort-pipe-demo
3. npm install(using node version 6)
4. ng serve
5. Access in browser at port 4200 (localhost:4200)

### Working Demo
<a href="https://www.adityachhikara.me/github-demos?block=sort-pipe" target="_blank">See Sorting Demo</a>


## Further help
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.
2. Node version 6
