import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerEditComponent } from './spacer-edit.component';

describe('SpacerEditComponent', () => {
  let component: SpacerEditComponent;
  let fixture: ComponentFixture<SpacerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
