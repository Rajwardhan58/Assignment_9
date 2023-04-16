import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

    public ChkPrime(iVal : number)
    {
      let flag=true;
        for(let i = 2;i<=iVal/2;i++)
        {
          if(iVal%i==0)
          {
            flag=false;
            break;
          }
        }

        return flag;
    }

  constructor() { }
}
