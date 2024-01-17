import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackspaceButtonComponent } from './backspace-button.component';

describe('BackspaceButtonComponent', () => {
  let component: BackspaceButtonComponent;
  let fixture: ComponentFixture<BackspaceButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackspaceButtonComponent]
    });
    fixture = TestBed.createComponent(BackspaceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
