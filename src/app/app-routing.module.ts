import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'logistiques', component:LogistiqueComponent},
  {path:'events', component:EvenementComponent},
  {path:'formations', component:FormationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
