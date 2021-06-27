export class Post {
  title:string;
  body:string;
  id?:number | null
  userId?:number | null
  constructor(title:string, body:string, id:number | null, userId:number | null){
    this.title = title;
    this.body = body;
    this.id = id;
    this.userId = userId;
  }
}