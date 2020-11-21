import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRouteModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRouteModule],
  providers: [TestService],
  exports: [TestComponent],
})
export class TestModule {}
