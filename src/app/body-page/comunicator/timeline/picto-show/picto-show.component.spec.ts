import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictoShowComponent } from './picto-show.component';

describe('PictoShowComponent', () => {
  let component: PictoShowComponent;
  let fixture: ComponentFixture<PictoShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictoShowComponent]
    });
    fixture = TestBed.createComponent(PictoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
