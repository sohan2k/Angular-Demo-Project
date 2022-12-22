import { Injectable } from '@angular/core';
import { Employee, employeeList } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  //employee id generate by increment it
  public id=0;
  //employee array 
  emplist=employeeList;
  // Alert
  alertValue={
    showAlert:false,
    alertMessage:"",
    alertType:""
  }
  constructor() { }

  add(addForm:any){
    let e1=new Employee(); 
    e1.setId(this.id++);   //instance create
    e1.setName(addForm.value.name);          //
    e1.setEmail(addForm.value.email);        // insert data
    e1.setAddress(addForm.value.address);    //
    e1.setPhone(addForm.value.phone);  
    e1.isActive=true;      //
    this.emplist.push(e1); //add in array
    console.log(addForm);
  }

  //Upadate data in array
  update(updateForm:any){
    let e1=new Employee(); 
    e1.setId(updateForm.value.id);
    e1.setName(updateForm.value.name);          //
    e1.setEmail(updateForm.value.email);        // insert data
    e1.setAddress(updateForm.value.address);    //
    e1.setPhone(updateForm.value.phone);  
    e1.setStatus(updateForm.value.isActive);
    this.emplist.map((emp, i) => {
    if (emp.id == updateForm.value .id){
      this.emplist.push(e1);
    }
    });
  }
  
  //method to get data in form
  getEmpData(i:any){
    console.log(Number(i.value));
    console.log(Number(i));
    return this.emplist[i];
  }

  //delete from array
  delEmployee(i:number):any{
    // console.log(this.delEmpRequestId)
    this.emplist.splice(i, 1);
  }

  getName(i:any){
    return this.emplist[i].name;
  }
  getAllEmployee(){
    return this.emplist;
  }
  
  
  
}
