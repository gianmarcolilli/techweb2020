import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoreComponent } from './components/autore/autore.component';
import { PlayerComponent } from './components/player/player.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';
import { ConfiguraComponent } from './components/configura/configura.component';

const routes: Routes = [
  { path: "home" , component:HomePageComponent},
  { path: "autore" , component:AutoreComponent},
  { path: "player" , component:PlayerComponent},
  { path: "visualizza/:id" , component:VisualizzaComponent},
  { path: "" , component:HomePageComponent},
  { path: "player/:tipo/:fascia/:traccia", component:PlayerComponent},
  { path: "configura/:id", component: ConfiguraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
