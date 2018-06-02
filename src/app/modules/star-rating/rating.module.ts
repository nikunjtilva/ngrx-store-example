import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BarRatingComponent} from './component/bar-rating.component';

@NgModule({
  declarations: [
    BarRatingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BarRatingComponent
  ]
})
export class BarRatingModule {
}
