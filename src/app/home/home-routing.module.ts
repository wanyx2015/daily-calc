import { Math2Component } from './math2/math2.component';
import { MathComponent } from './math/math.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Math3Component } from './math3/math3.component';


const routes: Routes = [
  { path: '', component: MathComponent },
  { path: '30', component: Math2Component },
  { path: '60', component: Math3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
