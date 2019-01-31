import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supervisor1Component } from './supervisor1.component';

describe('Supervisor1Component', () => {
  let component: Supervisor1Component;
  let fixture: ComponentFixture<Supervisor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supervisor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supervisor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
