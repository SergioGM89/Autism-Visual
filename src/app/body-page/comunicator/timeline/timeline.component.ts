import { Component, OnInit, signal } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { TimeLineService } from 'src/app/services/time-line.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit{

  public pictograms: Pictogram[] = [];

  constructor(private timeLineService: TimeLineService){

  }

  ngOnInit(): void {
    this.timeLineService.pictoCards$.subscribe(pictos => {
      this.pictograms = pictos;
    })
  }

}
