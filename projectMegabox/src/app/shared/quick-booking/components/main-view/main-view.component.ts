import { Component, OnInit } from '@angular/core';
import { QuickBookingService } from '../../service/quick-booking.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  timeTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  currentTime: number;
  listLocation = 0;
  today: string;
  afterToday = [];

  constructor(private quickBookingService: QuickBookingService) {}
  
  ngOnInit() {
    this.currentTime = new Date().getHours();
    this.afterToday = [...this.quickBookingService.calThisMonth(), ...this.quickBookingService.monthAfterToday()];
    this.today = this.quickBookingService.today
  }


  nextTime(ulTime: HTMLUListElement) {
    if (this.listLocation === -616) return;

    this.listLocation -= 44;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }

  prevTime(ulTime: HTMLUListElement) {
    if (this.listLocation === 0) return;

    this.listLocation += 44;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }


  nextDay(ulTime: HTMLUListElement) {
    if (this.listLocation === -(this.afterToday.length - 5) * 68) return;

    this.listLocation -= 68;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }

  prevDay(ulTime: HTMLUListElement) {
    if (this.listLocation === 0) return;

    this.listLocation += 68;
    ulTime.style.transform = `translateX(${this.listLocation}px)`;
  }

  checkDayActive(day: string, elem?: HTMLUListElement) {
    this.quickBookingService.activeToday = day;
    
    if (this.quickBookingService.today === day) return;

    const idx = this.afterToday.findIndex(item => item.fullDate === day);
    this.listLocation = idx * -68;

    elem.style.transform = `translateX(${this.listLocation}px)`;
  }
}
