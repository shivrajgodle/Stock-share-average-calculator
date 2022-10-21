import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  login: FormGroup;
  avgPrice!:number
  totalUnit!:number
  totalPrice!:number
 

  value17: number = 20;
  value20: number = 50;



  constructor() {
    this.login = new FormGroup({
      unit1:new FormControl("",Validators.required),
      price1:new FormControl("",Validators.required),
      unit2:new FormControl("",Validators.required),
      price2:new FormControl("",Validators.required)
    });
   }

  ngOnInit(): void {
  }

  calculate(){
    console.log("feeling good",this.login.value);

    var unit1 = this.login.value.unit1
    var price1 = this.login.value.price1
    var unit2 = this.login.value.unit2
    var price2 = this.login.value.price2

    var totalUnits = unit1 + unit2
    

    this.totalPrice = (unit1 * price1) + (unit2 * price2);

    this.avgPrice = (unit1 / totalUnits * price1) + (unit2 / totalUnits * price2)
    this.totalUnit = totalUnits
    alert("average generated please check below.....")
    
     
  }

  

}

