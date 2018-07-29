import {Component} from '@angular/core';

export enum GridOrder {
  ASC,
  DESC
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-root';
  order: any = GridOrder;

  data: any = [
    {name: 'Hashim Amla', score: '50'},
    {name: 'Ben Cutting', score: '40'},
    {name: 'Faf du Plessis', score: '30'},
    {name: 'Grant Elliott', score: '20'},
    {name: 'Imran Tahir', score: '10'},
    {name: 'David Miller', score: '60'},
    {name: 'Morné Morkel', score: '70'},
    {name: 'Tim Paine', score: '80'},
    {name: 'Thisara Perera', score: '90'},
    {name: 'Darren Sammy', score: '100'},
    {name: 'Tamim Iqbal', score: '10'},
    {name: 'Faf du Plessis', score: '30'},
    {name: 'Grant Elliott', score: '20'},
    {name: 'Imran Tahir', score: '10'},
    {name: 'David Miller', score: '60'},
    {name: 'Morné Morkel', score: '70'},
    {name: 'Tim Paine', score: '80'},
    {name: 'Thisara Perera', score: '90'},
    {name: 'Darren Sammy', score: '100'},
    {name: 'Tamim Iqbal', score: '10'},
    {name: 'Faf du Plessis', score: '30'},
    {name: 'Grant Elliott', score: '20'},
    {name: 'Imran Tahir', score: '10'},
    {name: 'David Miller', score: '60'},
    {name: 'Morné Morkel', score: '70'},
    {name: 'Tim Paine', score: '80'},
    {name: 'Thisara Perera', score: '90'},
    {name: 'Darren Sammy', score: '100'},
    {name: 'Tamim Iqbal', score: '10'}
  ];

  originalData: any = [];

  constructor() {
    this.originalData = this.data.slice();
  }

  sortMe(e: any): void {
    const {field, order} = e;
    const keys: string[] = ['name', 'score'];
    switch (order) {
      case 'ASC':
        switch (field) {
          case keys[0]:
            this.data.sort((a, b) => {
              if (a[keys[0]] < b[keys[0]]) {
                return -1;
              }
              if (a[keys[0]] > b[keys[0]]) {
                return 1;
              }

              return 0;
            });
            break;
          case keys[1]:
            this.data.sort((a, b) => {
              const scorea: number = parseInt(a[keys[1]], 10);
              const scoreb: number = parseInt(b[keys[1]], 10);

              if (scorea < scoreb) {
                return -1;
              }
              if (scorea > scoreb) {
                return 1;
              }

              return 0;
            });
            break;
        }
        break;
      case 'DESC':
        switch (field) {
          case keys[0]:
            this.data.sort((a, b) => {
              if (a[keys[0]] < b[keys[0]]) {
                return 1;
              }
              if (a[keys[0]] > b[keys[0]]) {
                return -1;
              }

              return 0;
            });
            break;
          case keys[1]:
            this.data.sort((a, b) => {
              const scorea: number = parseInt(a[keys[1]], 10);
              const scoreb: number = parseInt(b[keys[1]], 10);

              if (scorea < scoreb) {
                return 1;
              }
              if (scorea > scoreb) {
                return -1;
              }

              return 0;
            });

            break;
        }
        break;
    }
  }

  selectMe($event: any): void {
    console.log($event);
    console.log('select event from app-component');
  }

  scrollMe($event: any): void {
    console.log($event);
    console.log('scroll event from app-component');
  }
}
