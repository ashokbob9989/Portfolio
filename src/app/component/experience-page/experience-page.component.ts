import { Component } from '@angular/core';
import { experiences } from '../../data/data';


interface Experience {
  company: string;
  website: string;
  role: string;
  position: string;
  duration: string;
  location?: string;
  teamSize?: number;
  responsibilities: string[];
  tools: string[];
  achievements?: string[];
  iconClass: string; // FontAwesome or custom icon
}



@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {

  experiences = experiences;


}
