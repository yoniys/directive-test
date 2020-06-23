import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { ReultsCheckService } from '../s/reults-check.service';

@Directive({
  selector: '[appAccount]'
})
export class AccountDirective {

  constructor(public le:ReultsCheckService) { }
  @HostListener('click') mouseClick(){
    if(this.check2==0){
     this.le.resu+=parseInt(this.num)
     this.check2=1
    }
    else{this.check2=0;
    this.le.resu-=parseInt(this.num)}
    // alert(`my cokor is ${this.color}`)
    // this.clickColor.emit(`the color is: ${this.color}`)

    this.clickd=!this.clickd
  }
  
  @HostBinding('class.click')clickd:boolean
  @HostBinding('attr.check2')check2:Number=0
  @Input('number')num:string



}
