import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingGroupToYouComponent } from './sending-group-to-you.component';

describe('SendingGroupToYouComponent', () => {
  let component: SendingGroupToYouComponent;
  let fixture: ComponentFixture<SendingGroupToYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingGroupToYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingGroupToYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
