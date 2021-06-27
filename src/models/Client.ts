export class Client {
  name:string;
  email:string;
  phone:string;
  website:string;
  street:string
  city:string;
  suite:string;
  id?:number | null;
  company:string;
  constructor(
    name:string,
    email:string, 
    phone:string, 
    website:string, 
    street:string, 
    city:string, 
    suite:string, 
    company:string, 
    id:number | null
  ){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.street = street;
    this.city = city;
    this.suite = suite;
    this.company = company;
    this.id = id;
  }
}