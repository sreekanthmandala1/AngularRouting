import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { CockpitComponent } from './components/page-eight/cockpit/cockpit.component';
import { PageEightComponent } from './components/page-eight/page-eight.component';
import { ServerElementComponent } from './components/page-eight/server-element/server-element.component';
import { PageFiveComponent } from './components/page-five/page-five.component';
import { PageNineComponent } from './components/page-nine/page-nine.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageSevenCockpitComponent } from './components/page-seven-cockpit/page-seven-cockpit.component';
import { PageSevenServerElementComponent } from './components/page-seven-server-element/page-seven-server-element.component';
import { PageSevenComponent } from './components/page-seven/page-seven.component';
import { PageSixComponent } from './components/page-six/page-six.component';
import { PageTenComponent } from './components/page-ten/page-ten.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageelevenComponent } from './components/pageeleven/pageeleven.component';
import { PagefourComponent } from './components/pagefour/pagefour.component';
import { PagetwelveComponent } from './components/pagetwelve/pagetwelve.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    NavigateComponent,
    StructuralDirectivesComponent,
    PagefourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageSevenCockpitComponent,
    PageSevenServerElementComponent,
    PageEightComponent,
    CockpitComponent,
    ServerElementComponent,
    PageNineComponent,
    PageTenComponent,
    PageelevenComponent,
    PagetwelveComponent,

  ],
  imports: [

    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
