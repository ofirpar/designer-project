import { Component, OnInit } from '@angular/core';
import { DynamicElComponent } from 'app/Elements/dynamic.component';
import { ElementDataService } from 'app/element-data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends DynamicElComponent implements OnInit {
  constructor(private elDataService: ElementDataService) {
    super(elDataService);
   }

  ngOnInit() {
  }

  

}
