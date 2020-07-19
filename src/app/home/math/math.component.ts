import { MathService } from './../../services/math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  kousuan: Array<string> = [];
  shushi: Array<string> = [];
  lianshi: Array<string> = [];

  constructor(private mservice: MathService) {

    this.kousuan = this.kousuan.concat(this.mservice.getPlusQs(6));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitPlusQs(6));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitMinusQs(6));
    this.kousuan = this.kousuan.concat(this.mservice.getMinusQs(6));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleMultiplyQs(12));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleDivideQs(14));

    this.shushi = this.shushi.concat(this.mservice.getMultiplyQs(20));

    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ1(2));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ2(4));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ3(3));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ4(3));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ5(2));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ6(2));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ7(4));
  }


  ngOnInit(): void {
  }

}
