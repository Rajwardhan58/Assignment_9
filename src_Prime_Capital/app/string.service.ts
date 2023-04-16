import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public CountCapital(str : string)
  {
    let cnt=0;
      for(let i=0;i<str.length;i++)
      {
        if(str.charAt(i)>='A' && str.charAt(i)<='Z')
        {
            cnt++;
        }
      }

      return cnt;
  }
  constructor() { }
}
