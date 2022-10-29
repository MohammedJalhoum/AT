import { User } from "./user.model"
import {Contact} from "./contact.model"
import { Address } from "./address.model"
import { Job } from "./job.models"

export interface Company{
    info:{
        id:number,
        name:string,
        logoImage:string,
        coverImage:string
    },
ownerUser:User,
users:User[],
contact:Contact,
address:Address,
jobs: Job[]
}