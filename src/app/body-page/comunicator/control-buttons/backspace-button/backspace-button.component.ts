import { Component } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { TimeLineService } from 'src/app/services/time-line.service';

@Component({
  selector: 'app-backspace-button',
  templateUrl: './backspace-button.component.html',
  styleUrls: ['./backspace-button.component.scss']
})
export class BackspaceButtonComponent {

  public pictogramsInTimeLine: Pictogram[] = [];
  constructor(private timeLineService: TimeLineService) {

  }

  ngOnInit(): void {
    this.timeLineService.pictoCards$.subscribe(pictos => {
      this.pictogramsInTimeLine = pictos;
    })
  }

  backspace() {
    console.log(this.pictogramsInTimeLine)
    this.pictogramsInTimeLine.pop();
  }


}
