import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  get routes(): Routes {
    return routes;
  }

  goTest1(): void {
    this.router.navigateByUrl('/test/one/1');
  }

  goTest2(): void {
    this.router.navigate(['test', 'two']);
  }
}
