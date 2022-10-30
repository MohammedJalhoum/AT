import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropDown } from './shared/models/dropdown.model';
import { DropDownService } from './shared/services/drop-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'ATS';
  subscriptions : Subscription[] = [];
  subscriptionsForDropdown:Subscription;
  items:any[]= [
    {id:1, name:"Computer Network"},
    {id:2, name:"Marketing"}
  ];
  items2:any[]= [
    {id:1, name:"Computer Network"},
    {id:2, name:"Marketing"}
  ];
  selectedItem:any = null;
  constructor(private dropdownService:DropDownService){}
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
  ngOnInit(): void{
    this.loadDropDowns();
  }
  loadDropDowns() {
   var sub = this.dropdownService.getAll().subscribe(
      res => {
        console.log(res);
      }
    );
    this.subscriptions.push(sub);  }

    onItemChange(item: DropDown, type:string): void{
      if(type === "selection1"){
        this.selectedItem = item;
      }
      else{
        console.log(item);
      }
    }
}
