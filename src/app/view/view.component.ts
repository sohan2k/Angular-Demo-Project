import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private dialog:MatDialog){}

  openDialog(){
    this.dialog.open(StatusComponent,{
      data:{
        message:'Are you want to delete'
      }
    })
  }

  addEmployee(){
    this.dialog.open(AddComponent)
  }

}
