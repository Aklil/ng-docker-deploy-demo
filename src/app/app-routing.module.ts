import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './eager/second/second.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'third', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '**', component: PageNotFoundComponent },  //NOTE: this must be put at last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
