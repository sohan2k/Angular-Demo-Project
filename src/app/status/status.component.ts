import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  public deleteModalId='';
  public delModalShowName='';
  // public isClick=false;
  // public close={
  //   "close":false
  // }
  // public msg="";
  // constructor(@Inject(MAT_DIALOG_DATA)public data:any){
  //   this.msg=data.message
  // }

  // closeDialog(){
  //   this.close["close"]=true;
  // }
  constructor(){
    console.log("status constructor");
  }
  public setDeleteModal={
    id:"",
    msg:""
  }
  
  set(modalId : string, delMSg : string){
    this.deleteModalId=modalId;
    this.delModalShowName=delMSg;
     console.log(this.deleteModalId)
     console.log('hello - from-status')
  }
  // set(id:string,msg:string){
  //   this.setDeleteModal.id=id;
  //   this.setDeleteModal.msg=msg;
  //   // console.log(this.setDeleteModal)
  //   console.log('hello')
  // }
  @ViewChild('delId') delId: ElementRef | undefined;
}
