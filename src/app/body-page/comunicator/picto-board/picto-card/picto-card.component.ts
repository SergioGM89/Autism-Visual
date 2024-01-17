import { Component, Input, OnInit } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { ArasaacService } from 'src/app/services/arasaac.service';
import { TimeLineService } from 'src/app/services/time-line.service';
// import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-picto-card',
  templateUrl: './picto-card.component.html',
  styleUrls: ['./picto-card.component.scss']
})
export class PictoCardComponent implements OnInit{
  
  public picto: Pictogram = {
    pictoImageUrl: "",
    schematic: false,
    sex: false,
    violence: false,
    aac: false,
    aacColor: false,
    skin: false,
    hair: false,
    downloads: 0,
    categories: [],
    synsets: [],
    tags: [],
    _id: 0,
    created: '',
    lastUpdated: '',
    keywords: [],
    desc: ''
  };

  @Input({required: true}) pictoId!: number;

  constructor(private arasaacService: ArasaacService, private timeLineService: TimeLineService){}
  
  async ngOnInit(): Promise<void> {
    console.log(this.pictoId)
    this.picto = await this.arasaacService.get__pictogramInfoById(this.pictoId);
    this.picto.pictoImageUrl = await this.arasaacService.get__pictogramImageById(this.pictoId);
    console.log({id: this.pictoId, picto: this.picto})
  }
  
  add(){
   this.timeLineService.addPictoCard(this.picto);
  }

}
