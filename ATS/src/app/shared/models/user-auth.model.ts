import { User } from "./user.model";

export interface UserAuth extends User{
    permisions:string[]
}