interface  tempreture{
  date:Date;
  mincelsius:number;
  maxcelsius:number;
  averageCelsius?:number;
  fahrenheit?:number

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent {
  monthmin_c:number=0
  selectedMonth:any=''
  monthmax_c:number=0
  monthavg:any=0
  monthfahrenheit:number=0
  exampleavg:any=0
  monthmin:any 
   monthmax:any
  tableData:tempreture[] = [
   
    { date:new Date(2021,0,10), mincelsius: 10, maxcelsius: 20 },
    { date: new Date(2023,0,11), mincelsius: 30, maxcelsius: 40 },
   
    { date:new Date(2023,7,10), mincelsius: 10, maxcelsius: 20 },
    { date: new Date(2023,7,11), mincelsius: 30, maxcelsius: 40 },

    { date:new Date(2021,1,10), mincelsius: 50, maxcelsius: 100 },
    { date: new Date(2023,1,11), mincelsius: 50, maxcelsius: 100 },
  
  ];

  ngOnInit(): void {
    this.calculateAverages();

  }

  calculateAverages(): void {
    for (const data of this.tableData) {
       data.averageCelsius = (data.mincelsius + data.maxcelsius) / 2;
       data.fahrenheit = (data.averageCelsius * 9/5) + 32;
    }
  }
  months = [
    { name: 'January',index:0 },
    { name: 'February',index:1 },
    { name: 'March',index:2 },
    { name: 'April',index:3 },
    { name: 'May',index:4 },
    { name: 'June' ,index:5},
    { name: 'July' ,index:6},
    { name: 'August' ,index:7},
    { name: 'September',index:8 },
    { name: 'October' ,index:9},
    { name: 'November',index:10 },
    { name: 'December',index:11 }
  ]; 
  onMonthSelect(): void {
    let count = 0;
    this.monthavg = 0; 
    this.exampleavg = 0;
    // this.monthmin = Infinity; 
    // this.monthmax = -Infinity; 
    this.monthmin = null; 
    this.monthmax = null; 
    this.monthfahrenheit = 0;
    for (const data of this.tableData) {
      if (data.date.getMonth() === this.selectedMonth.index) {
        count++;
        //  this.monthmin = Math.min(this.monthmin, data.mincelsius);
        //  this.monthmax = Math.max(this.monthmax, data.maxcelsius);
        if (this.monthmin === null || data.mincelsius < this.monthmin) {
          this.monthmin = data.mincelsius;
        }
        if (this.monthmax === null || data.maxcelsius > this.monthmax) {
          this.monthmax = data.maxcelsius;
        }
        this.exampleavg += (data.mincelsius + data.maxcelsius) / 2;
      }
    }
    if (count > 0) {
      this.monthavg = this.exampleavg / count;
      this.monthfahrenheit = (this.monthavg * 9 / 5) + 32;
    }
  }
 
  
  
  
  

}
