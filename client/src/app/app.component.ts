import { Component, ElementRef, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import { ApiService } from './apiService.service';
import { ExcelService } from './excelService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'entercoms-assignment';
  isOpenPanel: boolean = false;
  displayedColumns: string[] = [
    'orderNo',
    'customer',
    'items',
    'orderDate',
    'quentity',
    'orderCost',
    'ohQty',
    'poArrivals',
    'poAsHarizan',
    'actions',
  ];
  ordersdataSource: [];
  receivingdataSource: [];
  readyShipPotRev: number;
  totalLines: number;
  totalUnits: number;
  recPotRev: number;
  totalOrders: number;
  recTotalUnits: number;
  backlogChartOptions: object;
  Highcharts = Highcharts;
  backlogData = [];
  chartColors: Array<string> = ['#0080ff', '#00ff7f', '#ff7f00'];
  isVisibleChart: boolean = true;
  ismaximizeOrderTbl: boolean = false;
  ismaximizeReceiveTbl: boolean = false;
  selectedUnit = '$';
  unitList = [{ symbol: '₹' },
  { symbol: '¥' },
  { symbol: '$' },
  { symbol: '€' },
  ];

  receivedChartOption: object;
  dueNext4WeekChartOption: object;


  constructor(private apiService: ApiService, private excelService: ExcelService) { }

  ngOnInit() {
    this.apiService.getOrders().subscribe(
      data => {

        this.ordersdataSource = data.orders;
        this.readyShipPotRev = data.potentialrev;
        this.totalLines = data.orders.length;
        let totUnitsCoun = 0;
        data.orders.filter(x => totUnitsCoun += x.items)
        this.totalUnits = totUnitsCoun;

        this.backlogData = data.backlog;
        this.loadBarChart(this.backlogData, this.chartColors);
      },
      error => {
        alert('Error While loading Order List Data')
        console.log(error);
      });

    this.apiService.getReceivings().subscribe(
      data => {
        this.receivingdataSource = data.receivings;
        this.recPotRev = data.potentialrev;
        this.totalOrders = this.receivingdataSource.length;
        let totalUnits = 0;
        data.receivings.filter(x => totalUnits += x.items);
        this.recTotalUnits = totalUnits;
        let pieChartData = this.getReceivedPieDetail();

        this.loadPieChart(pieChartData);
        this.loadDueBarChart(data.dueFoutWeekList);

      },
      error => {
        alert('Error While loading Order List Data')
        console.log(error);
      });
  }


  open() {
    this.isOpenPanel = true;
  }

  close() {
    this.isOpenPanel = false;
  }

  maxMinOrderTbl() {
    this.ismaximizeOrderTbl = !this.ismaximizeOrderTbl;
  }

  maxMinReceivedTbl() {
    this.ismaximizeReceiveTbl = !this.ismaximizeReceiveTbl;
  }

  reset() {
    this.isOpenPanel = false;
    this.ismaximizeOrderTbl = false
    this.ismaximizeReceiveTbl = false;
    this.loadBarChart(this.backlogData, this.chartColors);
  }

  calWidth(value: number, items: number) {
    let eleWidth = value / items * 100;
    return eleWidth + "%";
  }


  loadBarChart(data, colrs: Array<string>) {

    this.backlogChartOptions = {
      colors: colrs,
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['ST 522', 'ST 540', 'ST 560'],
        title: {
          text: 'Backlog'
        }
      },
      yAxis: {
        min: 0,
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: data

    }
  }

  updateChart(type: string) {
    this.isVisibleChart = false;

    let data = [];
    switch (type) {
      case 'all':
        setTimeout(() => {
          this.isVisibleChart = true;
          this.loadBarChart(this.backlogData, this.chartColors);
        }, 0);
        break;
      case 'top':
        data.push(this.backlogData.find(x => x.name == "Top Customer"));
        setTimeout(() => {
          this.isVisibleChart = true;
          this.loadBarChart(data, ['#0080ff']);
        }, 0);

        break;
      case 'willcall':
        data.push(this.backlogData.find(x => x.name == "Will Call"));
        setTimeout(() => {
          this.isVisibleChart = true;
          this.loadBarChart(data, ['#00ff7f']);
        }, 0);
        break;
      case 'hold':
        data.push(this.backlogData.find(x => x.name == "Hold"));
        setTimeout(() => {
          this.isVisibleChart = true;
          this.loadBarChart(data, ['#ff7f00']);
        }, 0);
        break;
    }

  }


  loadPieChart(data) {
    this.receivedChartOption = {
      colors: ['#00e600', '#0080ff', '#ffa500', '#b30000'],
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Received'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Received',
        colorByPoint: true,
        data: [{
          name: 'Inspection',
          y: data.inspection
        }, {
          name: 'Dock',
          y: data.dock
        }, {
          name: 'CLear',
          y: data.clear
        }, {
          name: 'Hold',
          y: data.hold
        }]
      }]
    }
  }

  loadDueBarChart(data) {
    this.dueNext4WeekChartOption = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Due Next 4 Weeks'
      },
      xAxis: {
        categories: ['PD', 'W1', 'W2', 'W3', 'W4']
      },
      yAxis: {
        min: 0

      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: "Dues",
        data: data
      }]
    }
  }

  download(fromPage) {
    if (fromPage === "readyship") {
      this.excelService.exportAsExcelFile(this.ordersdataSource, 'Orders');
    }
    if (fromPage === "receivings") {
      this.excelService.exportAsExcelFile(this.ordersdataSource, 'Receiving');
    }
  }
  getReceivedPieDetail() {
    let clear = 0;
    let dock = 0;
    let inspection = 0;
    let hold = 0;

    this.receivingdataSource.filter(x => collectCout(x));

    function collectCout(x) {
      clear += x.actions.clear,
        dock += x.actions.dock;
      inspection += x.actions.inspection;
      hold += x.actions.hold;
    }

    return {
      clear: clear,
      dock: dock,
      inspection: inspection,
      hold: hold
    }
  }
}