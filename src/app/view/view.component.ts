import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { StatusComponent } from '../status/status.component';
import {ModalDismissReasons, NgbModal,} from '@ng-bootstrap/ng-bootstrap';
import { Employee, employeeList } from '../Employee';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private _viewService:ViewService){
  }
  
  ngOnInit(){
  }

  //store list of employee here
  emplist=employeeList;
  id=0;

  // alert value
  alertValue={
    showAlert:false,
    alertMessage:"",
    alertType:""
  }
  
  //reference to pass data in update form
  empModel: Employee=new Employee();
    
  onSubmit(addForm:any){
    this._viewService.add(addForm);
    this.alertValue.showAlert=true;
    this.alertValue.alertMessage='Successfully record created';
    this.alertValue.alertType='success';
    
  }

  //set delete modal target id and msg
  public delModalShowName='';
  public deleteModalId='deleteModal';
  
  //get delete request
  delEmpRequestId =0;
  delEmpRequest(i:any){
    this.delEmpRequestId=i;
    this.delModalShowName=this._viewService.getName(i);
  }
  //delete from array
  delEmployee():any{
    // console.log(this.delEmpRequestId)
    this._viewService.delEmployee(this.delEmpRequestId);
  }
  
  
  //method to get data
  getEmpData(i:any){
    this.empModel=this._viewService.getEmpData(i);
  }
  //Update data in array
  update(updateForm:any){
    this._viewService.update(updateForm);
    this.alertValue.showAlert=true;
    this.alertValue.alertMessage='Successfully record updated';
    this.alertValue.alertType='success';
  }

  clearField(){
    this.empModel.name="";        //
    this.empModel.address="";    // property
    this.empModel.email= "";      //
    this.empModel.phone= "";     
  }
  
}
