import { Component, Input } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { TimeLineService } from 'src/app/services/time-line.service';

@Component({
  selector: 'app-picto-show',
  templateUrl: './picto-show.component.html',
  styleUrls: ['./picto-show.component.scss']
})
export class PictoShowComponent {

  @Input({required: true}) picto!: Pictogram;
}
