import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

=======
// import { LinkifyPipe } from './pipes/link.pipe';
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
<<<<<<< HEAD
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
=======
import { CommonModule } from '@angular/common';
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e
import {FormsModule} from '@angular/forms';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageSevenCockpitComponent } from './page-seven-cockpit/page-seven-cockpit.component';

<<<<<<< HEAD

=======
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e
import { PageSevenServerElementComponent } from './page-seven-server-element/page-seven-server-element.component';
import { PageEightComponent } from './page-eight/page-eight.component';
import { CockpitComponent } from './page-eight/cockpit/cockpit.component';
import { ServerElementComponent } from './page-eight/server-element/server-element.component';
<<<<<<< HEAD
import { PageNineComponent } from './page-nine/page-nine.component';
import { PageTenComponent } from './page-ten/page-ten.component';
import { PageelevenComponent } from './pageeleven/pageeleven.component';
import { PagetwelveComponent } from './pagetwelve/pagetwelve.component';




=======
import { PipesComponent } from './pipes/pipes.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



const appRoutes: Routes = [
  {path: 'pageone', component: PageOneComponent},
  {path: 'pagetwo', component: PageTwoComponent},
  {path: 'pagethree', component: PageThreeComponent},
  {path: 'pagefour', component: PagefourComponent},
  {path: 'pagefive', component: PageFiveComponent},
  {path: 'pagesix', component: PageSixComponent},
  {path: 'pageseven', component: PageSevenComponent},
  {path: 'pageeight', component: PageEightComponent},
];
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e

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
<<<<<<< HEAD
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
=======
    PipesComponent,
    InputComponent,
    OutputComponent,

  ],
  imports: [
    // LinkifyPipe,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  // exports:[LinkifyPipe] ,
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
