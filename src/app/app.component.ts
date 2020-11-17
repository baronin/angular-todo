import { Component } from '@angular/core';

interface Item {
  purchase: string,
  done: boolean,
  price: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'todo';
  price:number = 123;
  text = 'text';
  items:Item[] = [
    {purchase: 'Meet', done: true, price: 0.2},
    {purchase: 'Yellow', done: false, price: 3.2},
    {purchase: 'Color', done: true, price: 4},
    {purchase: 'Green', done: false, price: 2},
  ];

  addItem(purchase:string, price: number) {
    this.items.push({
      purchase, done: false, price
    });
  };

  removeItem(id: number) {
   this.items.splice(id, 1);
  };
}
