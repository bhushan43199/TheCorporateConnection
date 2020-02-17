import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistorComponent } from './user-registor.component';

describe('UserRegistorComponent', () => {
  let component: UserRegistorComponent;
  let fixture: ComponentFixture<UserRegistorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
