import { string } from "yup";

export interface PickuAddress{
    name:string;
    mobile:number;
    pinCode:string;
    address:string;
    locality:string;
    city:string;
    state:string;
}

export interface BankDetails{
    accountNumber:string;
    ifscCode:string;
    accountHolderName:string;
}

export interface BusinessDetails{
    businessName : string;
}

export interface Seller{
    id?:number;
    mobile: number;
    otp:number;
    GSTIN:string;
    pickuAddress: PickuAddress;
    bankDetails: BankDetails;
    SellerName: string;
    email: string;
    businessDetails: BusinessDetails;
    password:string;
    accountStatus?:string
}

export interface SellerReport{
    id?:number;
    seller:Seller;
    totalEarning:number;
    totalSales:number;
    totalRefud:number;
    totalTax:number;
    netEarnings:number;
    totalOrders:number;
    cancelOrders:number;
    totalTransaction:number;
}