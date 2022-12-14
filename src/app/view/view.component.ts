import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private dialog:MatDialog){}

  openDialog(){
    this.dialog.open(StatusComponent)
  }
}
