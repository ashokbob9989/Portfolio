import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skills } from '../../data/data';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss'
})
export class SkillsPageComponent {

  showSubsectionsEnabled: boolean = false;
  showSubsections() {
    this.showSubsectionsEnabled = !this.showSubsectionsEnabled;
  }

  skills = skills;
}
