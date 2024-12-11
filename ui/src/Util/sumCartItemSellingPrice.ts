import { CartItem } from "../Types/CartType";

export const sumCartItemSellingPrice = (cartItems:CartItem[])=>{
    return cartItems.reduce((acc,item)=>
        acc+item.sellingPrice*item.quantity,0
    )
}