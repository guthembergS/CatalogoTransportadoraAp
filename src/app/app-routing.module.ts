import { TransportadoraDetailsComponent } from './transportadora-details/transportadora-details.component';
import { CreateTransportadoraComponent } from './create-transportadora/create-transportadora.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportadoraListComponent } from './transportadora-list/transportadora-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'transportadora', pathMatch: 'full' },
  { path: 'transportadoras', component: TransportadoraListComponent },
  { path: 'add', component: CreateTransportadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
