import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencAddComponent } from './experienc-add.component';

describe('ExperiencAddComponent', () => {
  let component: ExperiencAddComponent;
  let fixture: ComponentFixture<ExperiencAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
