import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  questions=[1,2,3,4,5,6,7,8,9,10];
  answers=[1,2,3,4];
  ngOnInit(): void {
  }

}
