import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ButtonComponent } from 'app/Elements/button/button.component';
import { ComponentFactory } from '@angular/core/src/linker/component_factory';
import { DynamicElComponent } from 'app/Elements/dynamic.component';
import { ElementDataService } from 'app/element-data.service';
import { InputComponent } from 'app/Elements/input/input.component';
import { LabelComponent } from 'app/Elements/label/label.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  
  get currentEl(){
    return this.elDataService.currentEl;
  }
     constructor(private _cfr: ComponentFactoryResolver
      ,private elDataService: ElementDataService
    ) { }
     ngOnInit(){ }
  

    addButton(){
      var button = this._cfr.resolveComponentFactory(ButtonComponent);
      this.addComponent(button);
    }
    addInput(){
      var input = this._cfr.resolveComponentFactory(InputComponent);
      this.addComponent(input);
    }
    addLabel(){
      var label = this._cfr.resolveComponentFactory(LabelComponent);
      this.addComponent(label);
    }

    addComponent(component: ComponentFactory<DynamicElComponent>){    
        var dynamicComponent = this.container.createComponent(component);
        this.elDataService.count++;
        this.elDataService.currentEl = dynamicComponent.instance;
        dynamicComponent.instance._ref = dynamicComponent;
    }
}
