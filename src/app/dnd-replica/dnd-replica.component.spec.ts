import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndReplicaComponent } from './dnd-replica.component';

describe('DndReplicaComponent', () => {
  let component: DndReplicaComponent;
  let fixture: ComponentFixture<DndReplicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndReplicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DndReplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
