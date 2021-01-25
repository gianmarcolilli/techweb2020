import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoreComponent } from './components/autore/autore.component';
import { PlayerComponent } from './components/player/player.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VisualizzaComponent } from './components/visualizza/visualizza.component';
import { ConfiguraComponent } from './components/autore/configura/configura.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from "./components/auth/auth.guard";
import { SignupComponent } from './components/auth/signup/signup.component';
import { ClassificaComponent } from './components/classifica/classifica.component';

const routes: Routes = [
  { path: "home" , component:HomePageComponent},
  { path: "autore" , component:AutoreComponent,canActivate:[AuthGuard]},
  { path: "player" , component:PlayerComponent},
  { path: "visualizza/:id/:partita" , component:VisualizzaComponent},
  { path: "visualizza/:id" , component:VisualizzaComponent},
  { path: "" , component:HomePageComponent},
  { path: "player/:tipo/:fascia/:traccia/:mode/:partita", component:PlayerComponent},
  { path: "player/:tipo/:fascia/:traccia/:mode", component:PlayerComponent},
  { path: "player/:tipo/:fascia/:traccia", component:PlayerComponent},

  { path: "configura/:id", component: ConfiguraComponent , canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent },
  { path: "classifica", component: ClassificaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {




 }
