import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';

const routes: Routes = [
  { path: "home" , component:HomePageComponent},
  { path: "visualizza/:id" , component:VisualizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
