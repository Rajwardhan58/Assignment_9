import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src_Prime_Capital/app/number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements OnInit {

  public num = 239;
  public str = "Jay Ganesh...!";

  public flag = false;
  public result = 0;

    constructor(public nobj : NumberService,public sobj : StringService){}

    ngOnInit(){
      this.flag = this.nobj.ChkPrime(this.num);
      this.result=this.sobj.CountCapital(this.str);
    }
}
