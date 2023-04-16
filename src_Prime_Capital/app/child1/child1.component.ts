import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
    public result = false;
    public num = 7;
    constructor(public nobj : NumberService){}

    ngOnInit()
    {
        this.result=this.nobj.ChkPrime(this.num);
    }
    
}
