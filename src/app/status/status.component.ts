import { NONE_TYPE } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  public modalId='delete-modal';
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
  // setModalId(modalId : string){
  //   this.modalId=modalId;
  // }
}
