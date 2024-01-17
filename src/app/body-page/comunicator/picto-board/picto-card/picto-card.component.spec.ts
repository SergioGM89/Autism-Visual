import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictoCardComponent } from './picto-card.component';

describe('PictoCardComponent', () => {
  let component: PictoCardComponent;
  let fixture: ComponentFixture<PictoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictoCardComponent]
    });
    fixture = TestBed.createComponent(PictoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
