import { Component } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { TimeLineService } from 'src/app/services/time-line.service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent {

  public pictogramsInTimeLine: Pictogram[] = [];
  private currentAudio: HTMLAudioElement = new Audio();
  constructor(private timeLineService: TimeLineService) {

  }

  ngOnInit(): void {
    this.timeLineService.pictoCards$.subscribe(pictos => {
      this.pictogramsInTimeLine = pictos;
    })
  }

  private deleteAnimationPicto(pictoCards: NodeListOf<Element>) {
    pictoCards.forEach((pictoCard)=> {
      pictoCard.classList.remove("shadow-drop-center");
    });
  }

  private AddAnimationPicto(pictoCard: HTMLElement) {
    pictoCard.classList.add("shadow-drop-center");
  }

  private async reproduction(pictogramsInTimeLine: Pictogram[], currentIndex: number, pictoCards: NodeListOf<Element>) {
    if (currentIndex < pictogramsInTimeLine.length) {
      const findKeywordWithLocution = pictogramsInTimeLine[currentIndex].keywords.find((keyword) => keyword.hasLocution);

      if (findKeywordWithLocution == undefined)
        return;

      const response = await fetch(`https://static.arasaac.org/locutions/es/${findKeywordWithLocution.keyword}.mp3`);
      const blob = await response.blob();
      const audio = new Audio(URL.createObjectURL(blob));
      this.currentAudio = audio;
      audio.onended = () => {
        currentIndex += 1;
        this.reproduction(pictogramsInTimeLine, currentIndex, pictoCards);
      };
      audio.play();
      this.AddAnimationPicto(pictoCards[currentIndex] as HTMLElement);
      console.log(findKeywordWithLocution.keyword);
    }
  }

  play() {
    let currentIndex = 0;
    const pictoCards = document.querySelectorAll('.picto-card');
    this.currentAudio.pause();

    this.reproduction(this.pictogramsInTimeLine, currentIndex, pictoCards);
    this.deleteAnimationPicto(pictoCards);
  }


}
