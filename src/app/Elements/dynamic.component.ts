import { Component, ViewChild, ViewContainerRef, OnInit } from "@angular/core";
import { ElementDataService } from "app/element-data.service";


@Component({
    selector: 'dynamic-el',
})

export class DynamicElComponent
{
    _ref: any;
    // x = 100+'px';
    // y = 100+'px';
    // width = 100+'px';
    // text = 'default text';
    x:string;
    y:string;
    width:string;
    text:string;

    constructor(private elDataService1: ElementDataService){
        let count = this.elDataService1.count;
        this.x = (count*10)+'px';
        this.y = (count*10)+'px';
        this.width = '200px';
        this.text = 'default text';
    }

    onClick(){
        this.elDataService1.currentEl = this;
        console.log('component clicked');
    }

    removeObject() {
        this.elDataService1.currentEl = null;
        this.elDataService1.count--;
        this._ref.destroy();
    }
}