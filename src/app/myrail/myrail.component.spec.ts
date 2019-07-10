import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrailComponent } from './myrail.component';

describe('MyrailComponent', () => {
  let component: MyrailComponent;
  let fixture: ComponentFixture<MyrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
