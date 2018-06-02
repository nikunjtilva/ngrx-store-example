import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { HeaderComponent } from './components/header/header.component';
import { By } from '@angular/platform-browser';
import { BarRatingModule } from './modules/star-rating/rating.module';
import { OrderModule } from 'ngx-order-pipe';
import { Store,State } from '@ngrx/store';
import { AppState } from './../app/models/app-state';
import SpyObj = jasmine.SpyObj;
import { Observable } from 'rxjs/Observable';
import { RateFruitAction } from 'src/app/actions/fruit.actions';
import { RandomizeService } from 'src/app/randomize.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let storeSpy: SpyObj<Store<AppState>>;
  let stateSpy: SpyObj<State<AppState>>;
  let randomizeServiceSpy:SpyObj<RandomizeService>;

  let instance: AppComponent;
  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store',['select','dispatch']);
    storeSpy.select.and.returnValue(Observable.of({fruits:[{"name":"Melon","picture":"🍈","userRatings":[],"overallRating":0}]}));

    stateSpy = jasmine.createSpyObj('state',['value']);
    stateSpy.value.and.returnValue({"fruits":[]});

    randomizeServiceSpy = jasmine.createSpyObj('RandomizeService',['getRandomRating']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
      imports:[
        CustomMaterialModule,
        BarRatingModule,
        OrderModule
      ],
      providers:[
        {provide:Store,useValue:storeSpy},
        {provide:State,useValue:stateSpy},
        {provide:RandomizeService,useValue:randomizeServiceSpy}            
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.componentInstance;
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should contain app-headear element', () => {
    const appHeader = fixture.debugElement.query(By.css('app-header'))
    expect(appHeader).toBeTruthy();
  });
  it('should select store on component init', () => {
    instance.ngOnInit();
    expect(storeSpy.select).toHaveBeenCalled();
  });
  it('should dispatch load fruits action on init',()=>{
    instance.ngOnInit();
    expect(storeSpy.dispatch).toHaveBeenCalled();
  });
  it('should call fruitService rateFruit method on ratefruit method call of component', () => {
    let rating: 5;
    let fruitToUpdae = {"name":"Melon","picture":"🍈","userRatings":[],"overallRating":0};
    instance.rateFruit(rating,fruitToUpdae);
    expect(storeSpy.dispatch).toHaveBeenCalledWith(new RateFruitAction({fruit:fruitToUpdae,rating:rating}));
  });
  it('should randomize fruit rating on Start Random Rating button click',()=>{
    randomizeServiceSpy.getRandomRating.and.returnValue(Observable.of({itemnumber:4,rating:5}));
    instance.randomizeRatings(false);
    expect(randomizeServiceSpy.getRandomRating).toHaveBeenCalledWith(10,5)
  });
});
