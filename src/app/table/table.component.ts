import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'last_name', 'actions'];
  columnNames: any = {
    name: 'Nombre',
    last_name: 'Apellido',
    actions: 'Acciones',
  };
  dataSource: Item[] = [
    {
      name: 'Ivan',
      last_name: 'Guerra',
      actions: '.button',
      columns: this.displayedColumns,
    },
    {
      name: 'Brandi',
      last_name: 'Love',
      actions: '.button',
      columns: this.displayedColumns,
    },
    {
      name: 'Wanda',
      last_name: 'Nara',
      actions: '.button',
      columns: this.displayedColumns,
    },
  ];
}

interface Item {
  name: string;
  last_name: string;
  actions: string;
  columns: string[];
}
