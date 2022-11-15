import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, } from '@angular/core';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  // templateUrl: './list.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() {
    {{ListComponent}}
   }

  ngOnInit(): void {
  }

}
