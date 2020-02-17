import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueregistorComponent } from './venueregistor.component';

describe('VenueregistorComponent', () => {
  let component: VenueregistorComponent;
  let fixture: ComponentFixture<VenueregistorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueregistorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueregistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
