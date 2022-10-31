import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

  showAddFormStatus: boolean = false;
  educations: any[] = [];
  formData: any;
  formType: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
    // this.onUpdate.emit(this.educations);
  }

  onFormUpdate(formData: any){
    if(this.formType === 1){
      //add
    }else{
      //edit
    }
    //set new instance from formdata
    //push new instance into educations array
    //emit this educations array
  }


  onEditData(index: number): void {
    this.formType = 2;
    this.formData = this.educations[index];
  }

}