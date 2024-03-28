export interface Iuser{
    find(arg0: (u: any) => boolean): string
    id:number,
    name:string,
    username:string,
    address:Iaddress,
    phone:string,
    website:string,
    company:Icompany,
}
 export interface Iaddress{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:Igeo
}
export interface Igeo{
    lat:string,
    lng:string
}
export interface Icompany{
    name:string,
    catchPhrase:string,
    bs:string
}