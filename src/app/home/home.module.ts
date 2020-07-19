import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathComponent } from './math/math.component';


@NgModule({
  declarations: [MathComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [MathComponent]
})
export class HomeModule { }
