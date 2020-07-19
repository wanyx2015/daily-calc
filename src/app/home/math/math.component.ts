import { MathService } from './../../services/math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {


  plusArray: Array<string> = [];
  MinusArray: Array<string> = [];
  multiplyArray: Array<string> = [];
  digitPlusArray: Array<string> = [];
  digitMinusArray: Array<string> = [];
  simpleMutiplyArray: Array<string> = [];


  kousuan: Array<string> = [];
  shushi: Array<string> = [];

  constructor(private mservice: MathService) {

    // this.multiplyArray = this.mservice.getMultiplyQs(5);
    // this.plusArray = this.mservice.getPlusQs(5);
    // this.digitPlusArray = this.mservice.getDigitPlusQs(5);
    // this.digitMinusArray = this.mservice.getDigitMinusQs(5);
    // this.MinusArray = this.mservice.getMinusQs(5);
    // this.simpleMutiplyArray = this.mservice.getSimpleMultiplyQs(15);


    // this.kousuan = this.kousuan.concat(this.mservice.getMultiplyQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getPlusQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitPlusQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getDigitMinusQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getMinusQs(5));
    this.kousuan = this.kousuan.concat(this.mservice.getSimpleMultiplyQs(5));

    this.shushi = this.shushi.concat(this.mservice.getMultiplyQs(5));
  }


  ngOnInit(): void {
  }

}
