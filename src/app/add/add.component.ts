import { Component, ViewChild, OnInit } from '@angular/core';
import { Employee, employeeList } from '../Employee';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  public title="Add Employee";
  // emplist: Employee[]=[];//store list of employee here
  emplist=employeeList;
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
    // this.addEmployee(e1);
    this.emplist.push(e1);          //add in array
    // console.log(this.emplist);
    // return this.emplist.push(e1);
  }

  // addEmployee(emp:Employee){
  //   this.emplist.push(emp);
  //   console.log(this.emplist);
  // }

  // constructor(private status:StatusComponent){
  //   this.status.setDeleteModal.id='del';
  //   this.status.setDeleteModal.msg='del';
  // }
  test='';
  
  public status:any;
  ngOnInit(): void {
    this.status=new StatusComponent();
    this.status.set('del','sohan');
  }

  del():string{
    // let status=new StatusComponent();
    // // status.setDeleteModal.id='del';
    // // status.setDeleteModal.msg='Sohan';
    this.status.set('del','sohan');
    // console.log(status)
    console.log('hi-from-add')
    this.test='del';
    return 'del';
  }

}
