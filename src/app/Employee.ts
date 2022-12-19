export class Employee{
  public id: number=0;
  public name: string="";
  public address: string="";
  public email: string="";
  public phone: string="";
  public isActive:boolean=false;
  
  public setId(id : number){
    this.id=id;
  }
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
  public setStatus(isActive : boolean){
    this.isActive=isActive;
  }

  public getId():number{
    return this.id;
  }
  public getName():string{
    return this.name;
  }
  public getEmail():string{
    return this.email;
  }
  public getAddress():string{
    return this.address;
  }
  public getPhone():string{
    return this.phone;
  }
  public getStatus():boolean{
    return this.isActive;
  }
}
export const employeeList: Employee[]=[];