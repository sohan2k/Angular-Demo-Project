import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent {
  public arr:number[]|string[] | undefined;
  public s="";

  //get string[] and covert into number[] and sort
  get(){
    this.arr=this.s.split(",");
    this.arr=this.convert(this.arr);
    console.log(this.s);
    console.log("ary");
    console.log(this.arr);
    this.arr=this.sort(this.arr as number[]);
  }

  //sort list of number
  sort(a:number[]){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[i]<a[j]){
                let t=a[i];
                a[i]=a[j];
                a[j]=t;
            }
        }
    }
    return a;
  }
  
  //convert to number
  convert(s:any[]){
    let n:number[]=[];
    for(let i=0;i<s.length;i++){
      n.push(parseInt(s[i]));
    }
    return n;
  }
}
