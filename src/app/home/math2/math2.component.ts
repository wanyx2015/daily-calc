import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MathService } from './../../services/math.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.scss']
})
export class Math2Component implements OnInit {

  kousuan: Array<string> = [];
  shushi: Array<string> = [];
  lianshi: Array<string> = [];

  constructor(private mservice: MathService, private titleService: Title, private router: Router) {

    this.titleService.setTitle('每日计算（30题）');

    this.generateContent();

  }


  generateContent() {
    this.kousuan = [];
    this.lianshi = [];
    this.shushi = [];

    this.kousuan = this.kousuan.concat(this.mservice.getPlusQs(2));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitPlusQs(2));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitMinusQs(3));
    this.kousuan = this.kousuan.concat(this.mservice.getMinusQs(3));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleMultiplyQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleDivideQs(5));

    this.shushi = this.shushi.concat(this.mservice.getMultiplyQs(6));

    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ1(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ2(1));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ3(1));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ4(1));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ5(1));
    // this.lianshi = this.lianshi.concat(this.mservice.getComplexQ6(1));
    this.lianshi = this.lianshi.concat(this.mservice.getComplexQ7(1));
  }

  go() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
