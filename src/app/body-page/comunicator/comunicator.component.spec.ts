import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicatorComponent } from './comunicator.component';

describe('ComunicatorComponent', () => {
  let component: ComunicatorComponent;
  let fixture: ComponentFixture<ComunicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunicatorComponent]
    });
    fixture = TestBed.createComponent(ComunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
