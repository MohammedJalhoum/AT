import { Component, OnInit, OnDestroy } from '@angular/core';
import { DropDownService } from './shared/services/drop-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'ATS';
  subscriptions : Subscriptions[] = [];
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
}
