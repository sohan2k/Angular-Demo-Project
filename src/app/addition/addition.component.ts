import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  public a="";
  public b="";
  public sum="";
  public isEven=false;
  public even={
    "test-success":this.isEven,
    "test-danger":this.isEven
  }
  add(){
    this.sum=this.a+this.b;
    let t:number =Number( this.a+this.b);
    if(t%2===0){
      this.even['test-danger']=false;
      this.even['test-success']=true;
      console.log("even");
    }
    else{
      this.even['test-danger']=true;
      this.even['test-success']=false;
      console.log("odd");
    }
  }
}
