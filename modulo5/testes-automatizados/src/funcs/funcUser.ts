import { user } from "../models/user";

export const performPurchase = (user:user,value:number) => {
    
    if(user.balance >= value){
        return user = {
            name: user.name,
            balance: user.balance - value
        }
    }else {
        return undefined;
    }
}