export interface notifications{
    notificationDate:Date,
    notificationName:string
}
export interface companyModel {
    id:string,
    companyName:string,
    companyNumber:number,
    companyType:string,
    market:string,
    creation:Date,
    notification:notifications[]
}
