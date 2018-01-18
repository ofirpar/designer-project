import { Component, OnInit } from '@angular/core';
import { DynamicElComponent } from 'app/Elements/dynamic.component';
import { ElementDataService } from 'app/element-data.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent extends DynamicElComponent implements OnInit {

  constructor(private elDataService: ElementDataService) {
    super(elDataService);
   }

  ngOnInit() {
  }

}
