import { Component, OnInit } from '@angular/core';
import { Pictogram } from 'src/app/interfaces/pictogram.interface';
import { ArasaacService } from 'src/app/services/arasaac.service';

@Component({
    selector: 'app-picto-board',
    templateUrl: './picto-board.component.html',
    styleUrls: ['./picto-board.component.scss']
})
export class PictoboardComponent implements OnInit{
    
    public a_borrar: number[] = new Array(55).fill(0);
    public pictosIds: number[] = [];
    public dataAllPictos: Pictogram[] = [];
    
    constructor(private arasaacService: ArasaacService){
        
    }
    
    ngOnInit(): void {
        this.arasaacService.dataAllPictos$.subscribe(dataAllPictos => {
            this.dataAllPictos = dataAllPictos;
        });
        for(let i=0; i<54; i++){
            console.log(this.dataAllPictos[i])
            this.pictosIds.push(this.dataAllPictos[i]?._id);
        }
    }
}
