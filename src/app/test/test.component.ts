import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testSrv: TestService) { }

  ngOnInit(): void {
  }

  get count(): number {
    return this.testSrv.viewCount();
  }

}
