import { Component, OnInit } from '@angular/core';
import { ReultsCheckService } from 'src/app/s/reults-check.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public le:ReultsCheckService) { 
    setInterval(()=>{this.num=le.resu},1000)
  }

  ngOnInit(): void {
  }
  num=0
  

}
