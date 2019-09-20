import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ApiService } from './apiService.service';
import { ExcelService } from './excelService.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    HighchartsChartModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
