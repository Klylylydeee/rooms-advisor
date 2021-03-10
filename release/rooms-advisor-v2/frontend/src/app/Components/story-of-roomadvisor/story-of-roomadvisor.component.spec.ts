import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryOfRoomadvisorComponent } from './story-of-roomadvisor.component';

describe('StoryOfRoomadvisorComponent', () => {
  let component: StoryOfRoomadvisorComponent;
  let fixture: ComponentFixture<StoryOfRoomadvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryOfRoomadvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryOfRoomadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
