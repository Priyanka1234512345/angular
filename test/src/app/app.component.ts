import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iperson } from './models/person';
import { Itabletwo } from './models/tabletwo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  skills:Array<string> = ['JS','HTML','CSS'];
  country: Array<string> = ["India","US","UK","JAPAN","CHINA"];
  persons : Array<Iperson> = [
    {
      fname:"Jhon",
      lname:"doae",
      email:"jdd@gmail.com",
      contact:3533553
    },
    {
      fname:"Jhowwn",
      lname:"dqoe",
      email:"jad@gmail.com",
      contact:3535253
    },
    {
      fname:"Jhoeen",
      lname:"dode",
      email:"jzd@gmail.com",
      contact:3513553
    },
    {
      fname:"Jhons",
      lname:"dowe",
      email:"jcd@gmail.com",
      contact:3535253
    }


  ]
  data : Array<Itabletwo> = [
    { name: 'Rahul', age: 25, city: 'New Delhi' },
    { name: 'Vijay', age: 30, city: 'Muzaffarpur' },
    { name: 'Gaurav', age: 22, city: 'Noida' },
];

}
