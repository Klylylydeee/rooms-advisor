import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerCheckComponent } from './spacer-check.component';

describe('SpacerCheckComponent', () => {
  let component: SpacerCheckComponent;
  let fixture: ComponentFixture<SpacerCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacerCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
