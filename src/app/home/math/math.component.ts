import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MathService } from './../../services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  kousuan: Array<string> = [];
  shushi: Array<string> = [];
  lianshi: Array<string> = [];

  constructor(private mservice: MathService, private titleService: Title, private router: Router) {

    this.titleService.setTitle('每日计算（90题）');

    this.generateContent();

  }

  generateContent() {
    this.kousuan = [];
    this.lianshi = [];
    this.shushi = [];

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

  go() {
    this.router.navigate(['30']);
  }

  ngOnInit(): void {
  }

}
