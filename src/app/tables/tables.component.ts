import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  public n="";
  public res=[];

  table(){
    let t=Number(this.n);
    let a=[];
    for(let i=0;i<=10;i++){
      a[i]=i*t;
    }
    return a;
  }
}
