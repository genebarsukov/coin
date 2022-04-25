import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule , DragulaService } from 'ng2-dragula';

import { AppComponent }  from './components/app/app.component';
import { ChartComponent } from './components/charts/chart/chart.component';
import { ChartManagerComponent } from './components/chart-manager/chart-manager.component';
import { PriceChartComponent } from './components/charts/price-chart/price-chart.component';
import { ApiService } from './services/api.service';
import { PriceDataService } from './services/price-data.service';
import { LineSettingsComponent } from './components/line-settings/line-settings.component';
import { TimeSettingsComponent } from './components/time-settings/time-settings.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { RSIComponent } from './components/charts/rsi/rsi.component';
import { StochasticComponent } from './components/charts/stochastic/stochastic.component';
import { D3PriceChartService } from './services/d3/d3-price-chart.service';
import { D3RSIService } from './services/d3/d3-rsi.service';
import { D3StochasticService } from './services/d3/d3-stochastic.service';
import { D3ChartService } from './services/d3/d3-chart.service';
import { ScalingService } from './services/scaling.service';
import { MACDComponent } from './components/charts/macd/macd.component';
import { D3MACDService } from './services/d3/d3-macd.service';
import { D3CurveShapeService } from './services/d3/d3-curve-shape.service';
import { CurrentPricePercentComponent } from './components/current-price-percent/current-price-percent.component';
import { TimeSettingsSettingsService } from './services/settings/time-settings-settings.service';
import { AlertModalComponent } from './components/modals/alert-modal/alert-modal.component';
import { SettingsModalComponent } from './components/modals/settings-modal/settings-modal.component';
import { HelpModalComponent } from './components/modals/help-modal/help-modal.component';
import { ChartSettingsService } from './services/settings/chart-settings.service';
import { ObjectPropertiesPipe } from './pipes/object-properties.pipe';
import { SpreadChartComponent } from './components/charts/spread-chart/spread-chart.component';
import { D3SpreadChartService } from './services/d3/d3-spread-chart.service';
import { AlgoTesterComponent } from './components/algo-tester/algo-tester.component';
import { D3AlgoTesterService } from './services/d3/d3-algo-tester.service';
import { ErrorService } from './services/error.service';
import { TextPickerComponent } from './components/text-picker/text-picker.component';
import { IconSettingsService } from './services/settings/icon-settings.service';
import { MessageService } from './services/message.service';
import { ExcludePipe } from './pipes/exclude.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  declarations: [
    AppComponent,
    ChartComponent,
    ChartManagerComponent,
    PriceChartComponent,
    LineSettingsComponent,
    TimeSettingsComponent,
    ColorPickerComponent,
    RSIComponent,
    StochasticComponent,
    MACDComponent,
    CurrentPricePercentComponent,
    AlertModalComponent,
    SettingsModalComponent,
    HelpModalComponent,
    ObjectPropertiesPipe,
    ExcludePipe,
    SpreadChartComponent,
    AlgoTesterComponent,
    TextPickerComponent
  ],
  providers: [
    ApiService,
    PriceDataService,
    D3ChartService,
    D3PriceChartService,
    D3RSIService,
    D3StochasticService,
    D3MACDService,
    DragulaService,
    ScalingService,
    D3CurveShapeService,
    TimeSettingsSettingsService,
    ChartSettingsService,
    D3SpreadChartService,
    D3AlgoTesterService,
    ErrorService,
    IconSettingsService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
