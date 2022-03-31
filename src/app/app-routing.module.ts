import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotlightComponent } from './component/spotlight/spotlight.component';
const routes: Routes = [
  { path: '', redirectTo: 'spotlight', pathMatch : 'full' },
  { path: 'spotlight', component: SpotlightComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
