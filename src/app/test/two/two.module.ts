import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';



@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule
  ],
  exports: [TwoComponent]
})
export class TwoModule { }
