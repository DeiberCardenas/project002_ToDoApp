import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './interfaces/item';
import { ItemComponent } from './item/item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tareitas!';

  componentTitle = 'Mis tareitas!!';

  filter: 'todas' | 'activas' | 'listo!!' = 'todas';

  allItems = [
    { description: 'mamarle la cuca a mi mujer', done: true },
    { description: 'comer un sandwich', done: false },
    { description: 'comprar condones', done: false },
    { description: 'ir donde las putas', done: true },
  ];

  get items() {
    if (this.filter === 'todas') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'listo!!' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({ description, done: false });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
