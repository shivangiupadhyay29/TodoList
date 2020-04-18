import { Function } from "estree";

export default interface Note{
  content:string,
  status:string,
  createdBy?:string
  toggelDetailsVisibility?():Function
}
