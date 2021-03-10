import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackupComponent } from './header-backup.component';

describe('HeaderBackupComponent', () => {
  let component: HeaderBackupComponent;
  let fixture: ComponentFixture<HeaderBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
