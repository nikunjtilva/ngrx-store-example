import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BarRatingModule } from "./modules/star-rating/rating.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FruitsService } from './providers/fruits.service';
import { fruitReducer } from './reducers/fruits.reducer';
import { EffectsModule } from "@ngrx/effects";
import { FruitEffects } from './effects/fruit.effects';
import { OrderModule } from 'ngx-order-pipe';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({fruits:fruitReducer}),
    EffectsModule.forRoot([FruitEffects]),
    StoreDevtoolsModule.instrument(),
    BarRatingModule,
    OrderModule
  ],
  providers: [FruitsService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
