import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EighteenComponent } from './components/eighteen/eighteen.component';
import { FifteenComponent } from './components/fifteen/fifteen.component';
import { NineteenComponent } from './components/nineteen/nineteen.component';
import { PageEightComponent } from './components/page-eight/page-eight.component';
import { PageFiveComponent } from './components/page-five/page-five.component';
import { PageNineComponent } from './components/page-nine/page-nine.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageSevenComponent } from './components/page-seven/page-seven.component';
import { PageSixComponent } from './components/page-six/page-six.component';
import { PageTenComponent } from './components/page-ten/page-ten.component';
import { PageThirteenComponent } from './components/page-thirteen/page-thirteen.component';
import { PageThreeComponent } from './components/page-three/page-three.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageelevenComponent } from './components/pageeleven/pageeleven.component';
import { PagefourComponent } from './components/pagefour/pagefour.component';
import { PageFourteenComponent } from './components/pageFourteen/pageFourteen.component';
import { PagetwelveComponent } from './components/pagetwelve/pagetwelve.component';
import { SeventeenComponent } from './components/seventeen/seventeen.component';
import { SixteenComponent } from './components/sixteen/sixteen.component';
import { ThirtyComponent } from './components/thirty/thirty.component';
import { TwentyComponent } from './components/twenty/twenty.component';
import { TwentyeightComponent } from './components/twentyeight/twentyeight.component';
import { TwentyfiveComponent } from './components/twentyfive/twentyfive.component';
import { TwentyfourComponent } from './components/twentyfour/twentyfour.component';
import { TwentynineComponent } from './components/twentynine/twentynine.component';
import { TwentyoneComponent } from './components/twentyone/twentyone.component';
import { TwentysevenComponent } from './components/twentyseven/twentyseven.component';
import { TwentysixComponent } from './components/twentysix/twentysix.component';
import { TwentythreeComponent } from './components/twentythree/twentythree.component';
import { TwentytwoComponent } from './components/twentytwo/twentytwo.component';


const routes: Routes = [
  {path: 'pageone',   component: PageOneComponent},
  {path: 'pagetwo',   component: PageTwoComponent},
  {path: 'pagethree', component: PageThreeComponent},
  {path: 'pagefour',  component: PagefourComponent},
  {path: 'pagefive',  component: PageFiveComponent},
  {path: 'pagesix',   component: PageSixComponent},
  {path: 'pageseven', component: PageSevenComponent},
  {path: 'pageeight', component: PageEightComponent},
  {path:'pagenine',   component: PageNineComponent},
  {path:'pageten',    component: PageTenComponent},
  {path:'pageeleven', component: PageelevenComponent},
  {path:'pagetwelve', component: PagetwelveComponent},
  {path:'pagethirteen', component:PageThirteenComponent},
  {path:'pagefourteen', component:PageFourteenComponent},
  {path: 'pagefifteen',   component: FifteenComponent},
  {path: 'pagesixteen',   component: SixteenComponent},
  {path: 'pageseventeen', component: SeventeenComponent},
  {path: 'pageeighteen',  component: EighteenComponent},
  {path: 'pagenineteen',  component: NineteenComponent},
  {path: 'pagetwenty',   component: TwentyComponent},
  {path: 'pagetwentyone', component: TwentyoneComponent},
  {path: 'pagetwentytwo', component: TwentytwoComponent},
  {path:'pagetwentythree',   component: TwentythreeComponent},
  {path:'pagetwentyfour',    component: TwentyfourComponent},
  {path:'pagetwentyfive', component: TwentyfiveComponent},
  {path:'pagetwentysix', component: TwentysixComponent},
  {path:'pagetwentyseven', component:TwentysevenComponent},
  {path:'pagetwentyeight', component:TwentyeightComponent},
  {path:'pagetwentynine', component:TwentynineComponent},
  {path:'pagethirty', component:ThirtyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
