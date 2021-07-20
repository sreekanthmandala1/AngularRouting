import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageSevenCockpitComponent } from './page-seven-cockpit/page-seven-cockpit.component';

import { PageSevenServerElementComponent } from './page-seven-server-element/page-seven-server-element.component';
import { PageEightComponent } from './page-eight/page-eight.component';
import { CockpitComponent } from './page-eight/cockpit/cockpit.component';
import { ServerElementComponent } from './page-eight/server-element/server-element.component';
import { PageNineComponent } from './page-nine/page-nine.component';
import { PageTenComponent } from './page-ten/page-ten.component';





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
