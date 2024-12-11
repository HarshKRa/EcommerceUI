import { CartItem } from "../Types/CartType";

export const sumCartItemMrpPrice = (cartItems:CartItem[])=>{
    return cartItems.reduce((acc,item)=>
        acc+item.mrpPrice*item.quantity,0
    )
}