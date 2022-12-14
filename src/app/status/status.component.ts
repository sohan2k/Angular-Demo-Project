import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  // public isClick=false;
  public c={
    "close":false
  }
;
  constructor(private dialog:MatDialog){}
  closeDialog(){
    this.c["close"]=true;
  }
}
