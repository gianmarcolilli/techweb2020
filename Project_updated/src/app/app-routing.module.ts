import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoreComponent } from './components/autore/autore.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';

const routes: Routes = [
  { path: "home" , component:HomePageComponent},
  { path: "autore" , component:AutoreComponent},
  { path: "visualizza/:id" , component:VisualizzaComponent},
  { path: "" , component:HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
