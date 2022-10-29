import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { Education } from "./education.model";
import { Experiance } from "./experiance.model";
import { Language } from "./language.model";
import { Skill } from "./skill.model";
import { User } from "./user.model";

export interface JobSeekers{
    user:User,
    contact:Contact,
    address:Address,
    educations:Education[],
    experiances:Experiance[],
    skills:Skill[],
    languages: Language[],
}