import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraDetailsComponent } from './transportadora-details.component';

describe('TransportadoraDetailsComponent', () => {
  let component: TransportadoraDetailsComponent;
  let fixture: ComponentFixture<TransportadoraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
