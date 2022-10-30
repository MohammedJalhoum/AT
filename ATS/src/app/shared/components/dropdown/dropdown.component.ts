import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDown } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
@Input() label:string;
@Input() items: DropDown[]= []
@Output() itemChange: EventEmitter<DropDown> = new EventEmitter<DropDown>()
  constructor() { }

  ngOnInit(): void {
  }
  onItemChaneg(id:number): void {
    let item = this.items.find(i=>i.id == id);
    this.itemChange.emit(item);
  }
}
