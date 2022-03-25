import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*{
    path: 'todays',
    component: TodaysComponent,
  },
  {
    path: 'urgent',
    component: UrgentComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
  },
  {
    path: 'pending',
    component: PendingComponent,
  },*/
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
