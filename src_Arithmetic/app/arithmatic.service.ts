import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

    public Add(data1 : number,data2 : number)
    {
        return data1+data2;
    }

    public Substract(data1 : number,data2 : number)
    {
      return data1-data2;

    }

  constructor() { }
}
