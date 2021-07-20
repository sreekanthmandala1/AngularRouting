import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { PageEightComponent } from './page-eight/page-eight.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageNineComponent } from './page-nine/page-nine.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageTenComponent } from './page-ten/page-ten.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageelevenComponent } from './pageeleven/pageeleven.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PagetwelveComponent } from './pagetwelve/pagetwelve.component';


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
  {path:'pagetwelve',component:PagetwelveComponent}

  

=======
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'pipe', component:PipesComponent}
 
>>>>>>> fc775f8a30fb7b345924e464a952ad2b2a77d67e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
