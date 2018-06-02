import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from 'src/app/models/fruit';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  @Input() fruits: Observable<Fruit[]>;  
  constructor() { }
  ngOnInit() {
  }

}
