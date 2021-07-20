import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PagetwelveComponent } from './components/pagetwelve/pagetwelve.component';



const routes: Routes = [
  {path: 'pageone', component: PageOneComponent},
  {path: 'pagetwo', component: PageTwoComponent},
  {path: 'pagethree', component: PageThreeComponent},
  {path: 'pagefour', component: PagefourComponent},
  {path: 'pagefive', component: PageFiveComponent},
  {path: 'pagesix', component: PageSixComponent},
  {path: 'pageseven', component: PageSevenComponent},
  {path: 'pageeight', component: PageEightComponent},
  {path:'pagenine',component:PageNineComponent},
  {path:'pageten',component:PageTenComponent},
  {path:'pageeleven',component:PageelevenComponent},
  {path:'pagetwelve',component:PagetwelveComponent},
  {path:'pagethirteen',component:PageThirteenComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
