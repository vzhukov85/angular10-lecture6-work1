import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  param = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParam();
    //this.getParamSnapshot();
  }

  // вариант с observiable
  getParam(): void {
    this.activeRoute.params.subscribe((e) => (this.param = e['param']));
  }

  // вариант с shapshot
  getParamSnapshot(): void {
    this.param = this.activeRoute.snapshot.params['param'];
  }

  reload = async () => {
    if (this.router.url === '/test/one') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      const currentUrl = this.router.url + '?';
      this.router.navigateByUrl(currentUrl).then(() => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      });
    } else {
      await this.router.navigateByUrl('test');
    }
  };
}
