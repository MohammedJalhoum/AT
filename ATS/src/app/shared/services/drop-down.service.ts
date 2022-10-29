import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropDownParent } from '../models/dropdownParent.model';
import { DropDown } from '../models/dropdown.model';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {
  dropDownKey: string = 'dropdowns'
  constructor() { }
  getAll(): Observable<any> {
    let dropdowns : any = {};
    dropdowns['Country']= [
      {id:1, name:'Palestine'},
      {id:2, name:'Jordan'}
    ];
    dropdowns['City'] = [
      {id:1, name:'Gaza', parentId:1},
      {id:2, name:'Ramallah', parentId:1},
      {id:3, name:'Jenin', parentId:1},
      {id:4, name:'Ramallah', parentId:1},
      {id:1, name:'Amman', parentId:2},
      {id:2, name:'Zarqa', parentId:2},
      {id:3, name:'Aqba', parentId:2}
    ];
    dropdowns['Sector'] =[
      {id:1, name:'It And Management'},
      {id:2, name:'Accounting'}
    ];
    dropdowns['FunctionalArea'] = [
      {id:1, name:'Computer Science'},
      {id:2, name:'Marketing'},
      {id:3, name:'Health Care'},
    ]
    dropdowns['Jobtype'] = [
      {id:1, name:'Jobtype1'},
      {id:2, name:'Jobtype2'}
    ]
    dropdowns['Nationality'] = [
      {id:1, name:'Palestinein'},
      {id:2, name:'Jordanin'}
    ]
    dropdowns['EducationLevel'] = [
      {id:1, name:'Bachloruc'},
      {id:2, name:'Master'}
    ]
    dropdowns['Skills'] = [
      {id:1, name:'Entry'},
      {id:2, name:'Beginner'}
    ]
    dropdowns['benefits'] = [
      {id:1, name:'Work From Home'},
      {id:2, name:'Health Insurance'},
      {id:3, name:'Flexiable Hours'}
    ];
    dropdowns['LevelForLanguagesOrSkills'] = [
      {id:1, name:'Beginner'},
      {id:2, name:'intermediate'},
      {id:3, name:'advanced'},
    ]
    dropdowns['Status'] = [
      {id:1, name:'Employee'},
      {id:2, name:'UnEmployee'}
    ]
    dropdowns['Majors'] = [
      {id:1, name:'Software Engineer'},
      {id:2, name:'IT'}
    ]
    dropdowns['Universities'] = [
      {id:1, name:'IUG', parentId:1},
      {id:2, name:'AUG', parentId:1}
    ]

    return of(dropdowns)
}
setDropDown(dropdown: any) : void {
  localStorage.setItem(this.dropDownKey, JSON.stringify(dropdown));
}
getDropDown(): any {
  return JSON.parse(localStorage.getItem(this.dropDownKey));
}
getCountries(): DropDown[]{
  return this.getDropDown() && this.getDropDown().countries;
}
getCities(id:number, all:boolean = false): DropDownParent[]{
  if (all){
    return this.getDropDown()?.cities
  }
  if (this.getDropDown()?.cities){
    return this.getDropDown().cities.filter((val:any)=>{
    return val.parentId == id
   })
  }
  return null;
}
getSectors(): DropDown[]{
  return this.getDropDown()?.sectors;
}
getFunctionalAreas(): DropDown[]{
  return this.getDropDown()?.FunctionalAreas;
}
getLanguages(): DropDown[]{
  return this.getDropDown()?.Languages;
}
getBenefits(): DropDown[] {
  return this.getDropDown()?.benefits;
}
getJobType(): DropDown[] {
  return this.getDropDown()?.jobtype;
}
getNationality(): DropDown[] {
  return this.getDropDown()?.nationality;
}
getEducationLevel(): DropDown[] {
  return this.getDropDown()?.educationLevel;
}
geSkills(): DropDown[] {
  return this.getDropDown()?.skills;
}
getLevelForLanguagesOrSkills(): DropDown[] {
  return this.getDropDown()?.levelForLanguagesOrSkills;
}
getStatus(): DropDown[] {
  return this.getDropDown()?.status;
}
getMajors(): DropDown[]{
  return this.getDropDown()?.majors;
}

getUniversities(id:number, all:boolean = false): DropDownParent[]{
  if (all){
    return this.getDropDown()?.universities
  }
  if (this.getDropDown()?.universities){
    return this.getDropDown().universities.filter((val:any)=>{
    return val.parentId == id
   })
  }
  return null;
}


}
