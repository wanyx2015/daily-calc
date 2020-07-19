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
    return i.toString().concat(' - ').concat(j.toString()).concat(' = ');
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
    // console.log(i, j);
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


  // a*(b+c)
  // a*(b-c)

  // a-(b-c)
  // a-(b+c)
  // a-b-c
  // a-b+c

  // (a+b)*c
  // (a+b)/c

  // a+b*c
  // a+b/c

  // a-b*c
  // a-b/c

  // (a-b)*c
  // (a-b)/c


  // a/(b+c)
  // a/(b-c)





  // ****************
  // ****************
  // ****************
  // ****************

  // a*(b+c)
  // a*(b-c)
  getComplexQ1(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {
      let a = util.get1DigitNumber();
      let b = util.get2DigitNumber();
      let c = util.get2DigitNumber();
      const d = util.get2DigitNumber();
      const e = util.get2DigitNumber();
      while (b < c) {
        a = util.get1DigitNumber();
        b = util.get2DigitNumber();
        c = util.get2DigitNumber();
      }

      d < e
        ? result.push(this.returnMultiply(a, this.returnPlusUnit(b, c)))
        : result.push(this.returnMultiply(a, this.returnMinusUnit(b, c)));
    }
    return result;
  }


  // a-(b+c)
  getComplexQ2(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let a = util.get2DigitNumber();
      let b = util.get2DigitNumber();
      let c = util.get2DigitNumber();

      while (a < (b + c)) {
        a = util.get2DigitNumber();
        b = util.get2DigitNumber();
        c = util.get2DigitNumber();
      }

      result.push(this.returnMinus(a, this.returnPlusUnit(b, c)));

    }
    return result;
  }
  // a-(b-c)
  getComplexQ3(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let a = util.get2DigitNumber();
      let b = util.get2DigitNumber();
      let c = util.get2DigitNumber();

      while (b < c || a < (b - c)) {
        a = util.get2DigitNumber();
        b = util.get2DigitNumber();
        c = util.get2DigitNumber();
      }

      result.push(this.returnMinus(a, this.returnMinusUnit(b, c)));

    }
    return result;
  }

  // a+b*c
  // a-b*c
  getComplexQ4(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let a = util.get3DigitNumber();
      let b = util.get1DigitNumber();
      let c = util.get1DigitNumber();

      while (a < (b * c)) {
        a = util.get3DigitNumber();
        b = util.get1DigitNumber();
        c = util.get1DigitNumber();
        // console.log(a, b, c);
      }

      b < c
        ? result.push(this.returnMinus(a, this.returnMultiply(b, c)))
        : result.push(this.returnPlus(a, this.returnMultiply(b, c)));

    }
    return result;
  }

  // a + b/c
  // a - b/c
  getComplexQ5(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let a = util.get3DigitNumber();
      let b = util.get1DigitNumber();
      let c = util.get1DigitNumber();

      while (a < (b * c)) {
        a = util.get3DigitNumber();
        b = util.get1DigitNumber();
        c = util.get1DigitNumber();
        console.log(a, b, c);
      }

      b < c
        ? result.push(this.returnMinus(a, this.returnDivide(b * c, c)))
        : result.push(this.returnPlus(a, this.returnDivide(b * c, c)));

    }
    return result;
  }

  // (a + b) * c
  getComplexQ6(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let a = util.get2DigitNumber();
      let b = util.get2DigitNumber();
      let c = util.get1DigitNumber();
      let d = util.get1DigitNumber();

      while (a < b) {
        a = util.get2DigitNumber();
        b = util.get2DigitNumber();
        c = util.get1DigitNumber();
        d = util.get1DigitNumber();
        // console.log(a, b, c);
      }

      d < c
        ? result.push(this.returnMultiply(this.returnPlusUnit(a, b), c))
        : result.push(this.returnMultiply(this.returnMinusUnit(a, b), c));
    }
    return result;
  }

  // (a + b) / c
  // a1 = 2 digit * 1 digit > 100 ===> a+b = a1, 1 digit = c, 2 digit = d, a = a1 - d, b = a1 - a
  // a+b = a1
  // c = 1 digit
  // a = a1 - 2 digit
  // b = 2 digit

  getComplexQ7(n) {
    const result: Array<string> = [];
    for (let i = 0; i < n; i++) {

      let d = util.get2DigitNumber();
      let c = util.get1DigitNumber();
      let a = 0;
      let b = util.get2DigitNumber();

      while (d * c < 100) {
        b = util.get2DigitNumber();
        c = util.get1DigitNumber();
        d = util.get2DigitNumber();
      }
      a = d * c - b;
      // console.log(a, b, c);
      result.push(this.returnDivide(this.returnPlusUnit(a, b), c));
    }
    return result;
  }


  private returnPlus(num1, num2): string {
    return num1.toString().concat(' + ').concat(num2.toString());
  }
  private returnPlusUnit(num1, num2): string {
    return '(' + this.returnPlus(num1, num2) + ')';
  }
  private returnMinus(num1, num2): string {
    return num1 + ' - ' + num2;
  }
  private returnMinusUnit(num1, num2): string {
    return '(' + this.returnMinus(num1, num2) + ')';
  }
  private returnMultiply(num1, num2): string {
    return num1 + ' x ' + num2;
  }
  private returnMultiplyUnit(num1, num2): string {
    return '(' + this.returnMultiply(num1, num2) + ')';
  }
  private returnDivide(num1, num2): string {
    return num1 + ' ÷ ' + num2;
  }
  private returnDivideUnit(num1, num2): string {
    return '(' + this.returnDivide(num1, num2) + ')';
  }

}
