import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onProfileUpdate(data:any, type:Address): void {
  }
}
