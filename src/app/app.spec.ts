import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { AppComponent } from './app'; 
=======
import { AppComponent } from './app';
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'veterinaria' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('veterinaria');
=======
  it(`should have the 'Trato - Tu tienda online' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Trato - Tu tienda online');
>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
  });
});