export type User = {
  id:number;
  name:string;
  email:string;
  phone:string;
  website: string;
  address:{
    city:string,
    street:string,
    suite:string
  };
  company:{
    name:string
  }
}