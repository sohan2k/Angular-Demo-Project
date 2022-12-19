import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { StatusComponent } from '../status/status.component';
import {ModalDismissReasons, NgbModal,} from '@ng-bootstrap/ng-bootstrap';
import { Employee, employeeList } from '../Employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  
  //store list of employee here
    emplist=employeeList;
    id=0;
    name="";        //
    address= "";    // property
    email= "";      //
    phone= "";      //
    isActive =false;

    alertValue={
      showAlert:false,
      alertMessage:"",
      alertType:""
    }
    
  onSubmit(addForm:any){
    let e1=new Employee(); 
    e1.setId(this.id++);   //instance create
    e1.setName(addForm.value.name);          //
    e1.setEmail(addForm.value.email);        // insert data
    e1.setAddress(addForm.value.address);    //
    e1.setPhone(addForm.value.phone);  
    e1.isActive=true;      //
    this.addEmployee(e1);
    this.alertValue.showAlert=true;
    this.alertValue.alertMessage='Successfully record created';
    this.alertValue.alertType='success';
    console.log(addForm)
    // this.emplist.push(e1);          //add in array
    // console.log(this.emplist);
    // return this.emplist.push(e1);
  }

  addEmployee(emp:Employee){
    this.emplist.push(emp);
    console.log(this.emplist);
  }

  //set delete modal target id and msg
  public delModalShowName='';
  public deleteModalId='deleteModal';
  //get delete request
  delEmpRequestId =0;
  delEmpRequest(i:any){
    this.delEmpRequestId=i;
    this.delModalShowName=this.emplist[i].name;
  }
  //delete from array
  delEmployee():any{
    // console.log(this.delEmpRequestId)
    this.emplist.splice(this.delEmpRequestId, 1)
  }
  //reference to pass data in update form
  empModel: Employee=new Employee();
  
  //method to get data
  getEmpData(i:any){
    console.log(Number(i.value));
    console.log(Number(i));
    this.empModel=employeeList[i];
  }
  //Upadate data in array
  update(updateForm:any){
    this.emplist.map((emp, i) => {
    if (emp.id == updateForm.value .id){
      this.emplist[i].name = updateForm.value.name;
      this.emplist[i].address = updateForm.value.address;
      this.emplist[i].email = updateForm.value.email;
      this.emplist[i].phone = updateForm.value.phone;
      this.emplist[i].isActive = updateForm.value.isActive;
      //alert
      this.alertValue.showAlert=true;
      this.alertValue.alertMessage='Successfully record created';
      this.alertValue.alertType='success';
    }
    });
  }
  // clearField(){
  //   this.name="";        //
  //   this.address="";    // property
  //   this.email= "";      //
  //   this.phone= "";     
  // }
  
}
