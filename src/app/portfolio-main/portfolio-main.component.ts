import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-portfolio-main',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule

  ],
  templateUrl: './portfolio-main.component.html',
  styleUrl: './portfolio-main.component.css'
})
export class PortfolioMainComponent implements OnInit {

  click_toggle:boolean = true;
  default_data: any = {}
  dateNow:Date = new Date();
  currentDate:number = this.dateNow.getFullYear();

  // nav_links: string[] = ["Home","The journey","Skills","Career excellence","Get in touch"];

  nav_links = [
    {nav_title:'Home',path_navigation:'#homeSection'},
    {nav_title:'The journey',path_navigation:'#journeySection'},
    {nav_title:'Skills',path_navigation:'#skillsSection'},
    {nav_title:'Career excellence',path_navigation:'#carrerExcellenceSection'},
    {nav_title:'Get in touch',path_navigation:'#getInTouchSection'},
  ]

  expand_collapse(){
    this.click_toggle = !this.click_toggle;
  }

  ngOnInit(): void {
     this.default_data = this.imageLinks[0] ?? null;
  }

  imageLinks = [
    {img_name:'HTML',image_id:'HTML',image_path:'/assets/images/html5.png',course_percent:'95',link_description:'I have a clear understanding of the structure of HTML, including its semantic principles, proper organization, and best practices for creating well-structured, accessible, and responsive layouts. My expertise ensures clean, maintainable code that integrates seamlessly with modern frameworks and enhances user experiences.'},
    {img_name:'CSS',image_id:'CSS',image_path:'/assets/images/css3.png',course_percent:'95'},
    {img_name:'JS',image_id:'JS',image_path:'/assets/images/js.png',course_percent:'95'},
    {img_name:'Angular',image_id:'ANGLR',image_path:'/assets/images/angular.png',course_percent:'95'},
    {img_name:'Angular Theming',image_id:'ANGLMAT',image_path:'/assets/images/angular-material.png',course_percent:'95'},
    {img_name:'Figma',image_id:'FIGMA',image_path:'/assets/images/figma.png',course_percent:'95'},
  ]

  getData(item:any){
    this.default_data = item;
  }

  isMenuOpen = false;

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
