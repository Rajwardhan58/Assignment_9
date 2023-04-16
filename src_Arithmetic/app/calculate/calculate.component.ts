import { Component , OnInit} from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
    public num1 : number = 34;
    public num2 : number = 56;
    public sum : number = 0;
    public sub : number = 0;
    constructor(public aobj : ArithmaticService){}
    

    ngOnInit() {
        this.sum=this.aobj.Add(this.num1,this.num2)
        this.sub=this.aobj.Substract(this.num1,this.num2)
    }

}
