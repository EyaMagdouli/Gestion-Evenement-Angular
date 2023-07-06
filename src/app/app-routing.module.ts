import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogistiqueComponent } from './logistique/logistique.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FormationComponent } from './formation/formation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import  {StatisticsComponent} from './statistique/statistique.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'logistiques', component:LogistiqueComponent},
  {path:'events', component:EvenementComponent},
  {path:'formations', component:FormationComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'statistiques', component:StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
