import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AddimagesComponent } from './addimages/addimages.component';
import { LoginComponent } from './login/login.component';
import { ModalbuttonComponent } from './modalbutton/modalbutton.component';
import { NotesComponent } from './notes/notes.component';
import { PendingComponent } from './pending/pending.component';
import { RegisterComponent } from './register/register.component';
import { TodaysComponent } from './todays/todays.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UrgentComponent } from './urgent/urgent.component';

const routes: Routes = [
  /*{
    path: '',
    component: LoginComponent,
  },*/
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'modalbutton',

    component: ModalbuttonComponent,
  },
  {
    path: 'addimages',
    component: AddimagesComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
