import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Supervisor2Component } from './supervisor2.component';

describe('Supervisor2Component', () => {
  let component: Supervisor2Component;
  let fixture: ComponentFixture<Supervisor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Supervisor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Supervisor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
