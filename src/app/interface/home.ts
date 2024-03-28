import { Icomments } from "./Comments";

export interface Ihome{
    userId:number,
    id:number,
    title:string,
    body:string,
    authorName:string,
    Comments:Icomments[]
}