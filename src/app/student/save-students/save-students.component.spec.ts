import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStudentsComponent } from './save-students.component';

describe('SaveStudentsComponent', () => {
  let component: SaveStudentsComponent;
  let fixture: ComponentFixture<SaveStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveStudentsComponent]
    });
    fixture = TestBed.createComponent(SaveStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
