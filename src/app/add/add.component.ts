import { Component } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public title="Add Employee";
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
    // this.addEmployee(e1);
    this.emplist.push(e1);          //add in array
    // console.log(this.emplist);
    // return this.emplist.push(e1);
  }

  // addEmployee(emp:Employee){
  //   this.emplist.push(emp);
  //   console.log(this.emplist);
  // }
}
