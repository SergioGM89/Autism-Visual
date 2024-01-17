import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ArasaacService } from 'src/app/services/arasaac.service';

@Component({
  selector: 'app-comunicator',
  templateUrl: './comunicator.component.html',
  styleUrls: ['./comunicator.component.scss']
})
export class ComunicatorComponent implements OnInit {

  public loading: boolean = true;

  constructor(private arasaacService: ArasaacService){}

  async ngOnInit(){
    await this.arasaacService.get_dataAllPictos();
    this.loading = false;
  }
}
