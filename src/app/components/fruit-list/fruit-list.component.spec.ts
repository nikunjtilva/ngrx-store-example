import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitListComponent } from './fruit-list.component';
import { BarRatingModule } from '../../modules/star-rating/rating.module';
import { CustomMaterialModule } from "../../modules/custom-material/custom-material.module";

describe('FruitListComponent', () => {
  let component: FruitListComponent;
  let fixture: ComponentFixture<FruitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitListComponent ],
      imports:[BarRatingModule,CustomMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
