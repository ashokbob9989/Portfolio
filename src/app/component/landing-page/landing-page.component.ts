import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { phoneNumber, resumeLink, titles } from '../../data/data';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  titles = titles;

  currentTitle = this.titles[0];
  private index = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  yoe: { years: number; months: number; days: number } = this.calculateExperience();
  inforCircleClickYOE: string = "";
  showYOEInfo = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.index = (this.index + 1) % this.titles.length;
        this.currentTitle = this.titles[this.index];
      }, 1500);
    }
  }

  ngOnDestroy(): void {
    // Safely clear the interval if it exists
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  calculateExperience() {
    const startDate = new Date(2025, 7, 12); // Aug 12, 2025
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years < 0) {
      years = months = days = 0;
    }

    return { years, months, days };
  }

  resumeLink = resumeLink;
  phoneNumber = phoneNumber;

  handleDownloadCV() {
    window.open(
      this.resumeLink,
      '_blank'
    );
  }

  handleLetsCall() {
    const phoneNumber = this.phoneNumber;
    const message = encodeURIComponent(
      'Hi Ashok, I came across your portfolio and would like to connect.'
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }


}
