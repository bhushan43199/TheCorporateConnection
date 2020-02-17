import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbannerComponent } from './ibanner.component';

describe('IbannerComponent', () => {
  let component: IbannerComponent;
  let fixture: ComponentFixture<IbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
