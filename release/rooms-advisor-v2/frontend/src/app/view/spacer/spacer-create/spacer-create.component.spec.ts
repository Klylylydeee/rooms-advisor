import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerCreateComponent } from './spacer-create.component';

describe('SpacerCreateComponent', () => {
  let component: SpacerCreateComponent;
  let fixture: ComponentFixture<SpacerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
