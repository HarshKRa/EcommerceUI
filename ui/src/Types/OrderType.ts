
import { Product } from "./ProductType";
import { Address, User } from "./UserTypes";


export interface OrderState{
    orders:Order[];
    orderItem:OrderItem | null;
    currentOrder:Order | null;
    paymentOrder:any | null;
    loading:boolean;
    error:string | null;
    orderCanceled:boolean;
}

export interface Order{
    id: number;
    orderId:string;
    user:User;
    sellerId:number;
    oderItems:OrderItem[];
    orderDate:string;
    address:Address;
    PaymentDetails:any;
    totalMrpPrice:number;
    totalSellingPrice?:number;
    discount?:number;
    orderStatus:OrderStatus;
    totalItem:number;
    deliverDate:string;
}

export interface OrderStatus{
    PENDING :"PENDING";
    SHIPPED :"SHIPPED";
    DELIVERED:"DELIVERED";
    CANCELED :"CANCELED";
}

export interface OrderItem{
    id: number;
    order: Order;
    product: Product;
    size:string
    quantity: number;
    mrpPrice: number;
    sellingPrice: number;
    userId:number;
}