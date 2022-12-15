import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { StatusComponent } from '../status/status.component';
import {ModalDismissReasons, NgbModal,} from '@ng-bootstrap/ng-bootstrap';

class Employee{//} implements Employee{
  name: string="";
  address: string="";
  email: string="";
  phone: string="";

  public setName(name : string){
      this.name=name;
  }
  public setAddress(address : string){
    this.address=address;
  }
  public setEmail(email : string){
      this.email=email;
  }
  public setPhone(phone : string){
    this.phone=phone;
  }

  public getName():string{
    return this.name;
  }
  public getEmail(){
      return this.email;
  }
  public getAddress(){
      return this.address;
  }
  public getPhone(){
    return this.phone;
  }
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public delModalShowName='';
  // constructor(private dialog:MatDialog){}
  constructor(private modalService: NgbModal){}
  
  delEmployee(){
    this.delModalShowName='user';
  } 
   
  emplist: Employee[]=[];//store list of employee here

    name="";        //
    address= "";    // property
    email= "";      //
    phone= "";      //

  onSubmit(){
    let e1=new Employee();    //instance create
    e1.setName(this.name);          //
    e1.setEmail(this.email);        // insert data
    e1.setAddress(this.address);    //
    e1.setPhone(this.phone);        //
    this.addEmployee(e1);
    // this.emplist.push(e1);          //add in array
    // console.log(this.emplist);
    // return this.emplist.push(e1);
  }
  addEmployee(emp:Employee){
    this.emplist.push(emp);
    console.log(this.emplist);
  }


}
