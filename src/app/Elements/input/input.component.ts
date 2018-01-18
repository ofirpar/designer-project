import { Component, OnInit } from '@angular/core';
import { ElementDataService } from 'app/element-data.service';
import { DynamicElComponent } from 'app/Elements/dynamic.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends DynamicElComponent implements OnInit {

  constructor(private elDataService: ElementDataService) {
    super(elDataService);
   }

  ngOnInit() {
  }

}
