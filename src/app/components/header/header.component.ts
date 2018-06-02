import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  onRandomize:EventEmitter<boolean>;
  @Input()
  toggle:boolean;
  constructor() { 
    this.onRandomize = new EventEmitter();
  }

  ngOnInit() {
  }

  randomize(){
    this.onRandomize.emit(!this.toggle);
  }

}
