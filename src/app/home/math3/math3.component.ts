import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MathService } from './../../services/math.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math3',
  templateUrl: './math3.component.html',
  styleUrls: ['./math3.component.scss']
})
export class Math3Component implements OnInit {

  kousuan: Array<string> = [];
  shushi: Array<string> = [];
  lianshi: Array<string> = [];

  constructor(private mservice: MathService, private titleService: Title, private router: Router) {

    this.titleService.setTitle('每日计算（60题）');

    this.generateContent();

  }


  generateContent() {
    this.kousuan = [];
    this.lianshi = [];
    this.shushi = [];

    this.kousuan = this.kousuan.concat(this.mservice.getPlusQs(12));
    // this.kousuan = this.kousuan.concat(this.mservice.getDigitPlusQs(6));
    // this.kousuan = this.kousuan.concat(this.mservice.getDigitMinusQs(6));
    this.kousuan = this.kousuan.concat(this.mservice.getMinusQs(12));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleMultiplyQs(12));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleDivideQs(12));
    this.kousuan = this.kousuan.concat(this.mservice.getSimple2DigitDivideQs(12));

    // this.shushi = this.shushi.concat(this.mservice.getMultiplyQs(3));
    // // this.shushi = this.shushi.concat(this.mservice.getComplex2DigitDivideQs(7));
    // this.shushi = this.shushi.concat(this.mservice.getComplexPlus2DigitDivideQs(3));

    // // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ1(1));
    // // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ2(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ3(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ4(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ5(1));
    // // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ6(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ7(1));
  }

  go() {
    this.router.navigate(['30']);
  }

  print() {
    window.print();
  }

  ngOnInit(): void {
  }

}
