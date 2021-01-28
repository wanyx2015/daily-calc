import { MathService } from './../services/math.service';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathComponent } from './math/math.component';
import { Math2Component } from './math2/math2.component';
import { Math3Component } from './math3/math3.component';


@NgModule({
  declarations: [MathComponent, Math2Component, Math3Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [MathService],
  exports: [MathComponent]
})
export class HomeModule { }
