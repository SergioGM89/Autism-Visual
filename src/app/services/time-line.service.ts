import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pictogram } from '../interfaces/pictogram.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeLineService {

  private pictoCardsSubject = new BehaviorSubject<Pictogram[]>([]);

  public pictoCards$ = this.pictoCardsSubject.asObservable();

  addPictoCard(picto: Pictogram){
    let currentPictoCards = this.pictoCardsSubject.getValue();
    currentPictoCards.push(picto);

    this.pictoCardsSubject.next(currentPictoCards);
  }

  deletePictoCard(){
    let currentPictoCards = this.pictoCardsSubject.getValue();
    currentPictoCards.pop();

    this.pictoCardsSubject.next(currentPictoCards);
  }

}
