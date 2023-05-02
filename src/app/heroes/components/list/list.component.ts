import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public name: string = 'Andrés';

  public heroeNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];
  public lastDeletedHero?: string;

  removeLastHero(): void {
    this.lastDeletedHero = this.heroeNames.pop();
  }
}
