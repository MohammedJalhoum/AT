import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDown } from '../../models/dropdown.model';


@Component({
  selector: 'app-dropdown-multiple',
  templateUrl: './dropdown-multiple.component.html',
  styleUrls: ['./dropdown-multiple.component.css']
})
export class DropdownMultipleComponent implements OnInit {
  @Input() items: DropDown[] | any = [];
  @Output() itemChange: EventEmitter<DropDown> = new EventEmitter<DropDown>()

  dropdownSettings:any = {};
  form:FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.items = [
      { id: 1, name: 'Palestine' },
      { id: 2, name: 'Jordan' },
      { id: 3, name: 'Egypt' },
    ];

    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
    };
    
  }
  initForm(){
    this.form = this.formBuilder.group(
      {country: ['',[Validators.required]]}
    )
  }
  handleButtonClick(){
    console.log(this.form.value);
  }
  onItemSelect(item: any) {
    console.log(item);

  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getObjectListFormData(ids: number[]){
    let items = this.items.filter((item: { id: number; }) =>ids.includes(item.id))
    this.itemChange.emit(items);

  }



}
