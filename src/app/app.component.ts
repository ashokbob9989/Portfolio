import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { AboutPageComponent } from "./component/about-page/about-page.component";
import { SkillsPageComponent } from "./component/skills-page/skills-page.component";
import { ProjectsPageComponent } from "./component/projects-page/projects-page.component";
import { ExperiencePageComponent } from "./component/experience-page/experience-page.component";
import { FooterPageComponent } from "./component/footer-page/footer-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, AboutPageComponent, SkillsPageComponent, ProjectsPageComponent, ExperiencePageComponent, FooterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ashok-portfolio';
}
