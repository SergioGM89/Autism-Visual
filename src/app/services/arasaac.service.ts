import { Injectable } from '@angular/core';
import { Pictogram } from '../interfaces/pictogram.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArasaacService {

  private dataAllPictosSubject = new BehaviorSubject<Pictogram[]>([]);

  public dataAllPictos$ = this.dataAllPictosSubject.asObservable();

  constructor() { }

  //TODO: Controlar errores en las llamadas

  //TODO: Crear una interface language para el tipado estricto de los lenguages disponibles
  async get_dataAllPictos(language: string = "es"): Promise<void>{
    const response = await fetch(`https://api.arasaac.org/api/pictograms/all/${language}`);
    this.dataAllPictosSubject.next(await response.json());
    this.dataAllPictos$.subscribe(data => console.log("desde arasaac service" + data))
  }

  async get__pictogramInfoById(id: number): Promise<Pictogram>{
    const data =  await fetch(`https://api.arasaac.org/v1/pictograms/es/${id}`);
    return await data.json();
  }

  async get__pictogramImageById(id: number): Promise<string>{
    const data =  await fetch(`https://api.arasaac.org/v1/pictograms/${id}`);
    const blob = await data.blob();
    return URL.createObjectURL(blob);
  }
}
