import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosel2Component } from './carosel2.component';

describe('Carosel2Component', () => {
  let component: Carosel2Component;
  let fixture: ComponentFixture<Carosel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Carosel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
