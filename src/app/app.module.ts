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
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';

const appRoutes: Routes = [
  {path: 'pageone', component: PageOneComponent},
  {path: 'pagetwo', component: PageTwoComponent},
  {path: 'pagethree', component: PageThreeComponent},
  {path: 'pagefour', component: PagefourComponent},
  {path: 'pagefive', component: PageFiveComponent},
  {path: 'pagesix', component: PageSixComponent},
  {path: 'pageseven', component: PageSevenComponent},
];

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
    PageSevenComponent
  ],
  imports: [

    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
