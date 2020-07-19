import { Injectable } from '@angular/core';
import * as util from './util';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }



  // 整数加法
  getPlusQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getPlusQ());
    }
    return result;
  }

  private getPlusQ() {
    return util.get2DigitNumber().toString().concat(' + ').concat(util.get2DigitNumber().toString()).concat(' = ');
  }


  // 整数减法
  getMinusQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getMinusQ());
    }
    return result;
  }

  private getMinusQ() {
    let i = util.get3DigitNumber();
    let j = util.get2DigitNumber();
    while (i <= j) {
      i = util.get3DigitNumber();
      j = util.get2DigitNumber();
    }
    return i.toString().concat(' - ').concat(j.toString()).concat('=');
  }

  // 整数乘法
  getMultiplyQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getMultiplyQ());
    }
    return result;
  }

  private getMultiplyQ() {
    return util.get2DigitNumber().toString().concat(' x ').concat(util.get2DigitNumber().toString()).concat(' = ');
  }

  // 简单乘法
  getSimpleMultiplyQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getSimpleMultiplyQ());
    }
    return result;
  }
  private getSimpleMultiplyQ() {
    let j = 0;
    let i = 0;
    if (Math.floor(Math.random() * 100) > 50) {
      i = util.get1DigitNumber();
      j = util.get2DigitNumber() * 10;
    } else {
      i = util.get1DigitNumber() * 10;
      j = util.get2DigitNumber();
    }
    console.log(i, j);
    return j.toString().concat(' x ').concat(i.toString()).concat(' = ');

  }


  // 小数加法
  getDigitPlusQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getDigitPlusQ());
    }
    return result;
  }

  // 小数减法
  getDigitMinusQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getDigitMinusQ());
    }
    return result;
  }

  private getDigitPlusQ() {
    return util.getDigit().toString().concat(' + ').concat(util.getDigit().toString()).concat(' = ');
  }

  private getDigitMinusQ() {
    let i = util.getDigit();
    let j = util.getDigit();
    while (i <= j) {
      i = util.getDigit();
      j = util.getDigit();
    }

    return i.toString().concat(' - ').concat(j.toString()).concat(' = ');
  }


  // 除法

  getSimpleDivideQs(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      result.push(this.getSimpleDivideQ());
    }
    return result;
  }
  private getSimpleDivideQ() {
    let i = util.get1DigitNumber();
    let j = util.get2DigitNumber();

    while (i * j > 1000 || i * j <= 100) {
      i = util.get1DigitNumber();
      j = util.get2DigitNumber() * 10;
    }
    return (i * j).toString().concat(' ÷ ').concat(i.toString()).concat(' = ');
  }

}
