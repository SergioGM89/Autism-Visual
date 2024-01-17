import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictoboardComponent } from './picto-board.component';

describe('PictoboardComponent', () => {
  let component: PictoboardComponent;
  let fixture: ComponentFixture<PictoboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictoboardComponent]
    });
    fixture = TestBed.createComponent(PictoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
