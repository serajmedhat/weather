import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(2000)),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s .5s ease-in')
      ]),

    ]),
    trigger('EnterLeave1', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 2s ease-in')
      ]),

    ]),
    trigger('EnterLeave2', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 3.5s ease-in')
      ]),

    ]),
    trigger('EnterLeave3', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 5s ease-in')
      ]),

    ]),
    trigger('EnterLeave4', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 6.5s ease-in')
      ]),

    ])
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  temp: number;
  mintemp: number;
  maxtemp: number;
  pressure: number;
  humidity: number;
  constructor(private apiService: ApiService) { }
  ngOnInit() { }
  myClickFunction() {
    console.log(this.name);
    this.apiService.getweather(this.name).subscribe(res => {
      console.log(res);
      this.temp = res.main.temp;
      this.mintemp = res.main.temp_min;
      this.maxtemp = res.main.temp_max;
      this.pressure = res.main.pressure;
      this.humidity = res.main.humidity;
    });
  }
  myClickFunction1() {
    this.name = null;
    this.temp = null;
    this.mintemp = null;
    this.maxtemp = null;
    this.pressure = null;
    this.humidity = null;

  }
}
