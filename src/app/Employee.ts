export class Employee{
    private name: string="";
    private address: string="";
    private email: string="";
    private phone: string="";
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
    public getEmail():string{
        return this.email;
    }
    public getAddress():string{
        return this.address;
    }
    public getPhone():string{
      return this.phone;
    }
  }