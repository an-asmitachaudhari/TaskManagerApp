import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalbuttonComponent } from './modalbutton/modalbutton.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddimagesComponent } from './addimages/addimages.component';
import { NotesComponent } from './notes/notes.component';
import { TodaysComponent } from './todays/todays.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UrgentComponent } from './urgent/urgent.component';
import { PendingComponent } from './pending/pending.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ModalbuttonComponent,
    AddimagesComponent,
    NotesComponent,
    TodaysComponent,
    UpcomingComponent,
    UrgentComponent,
    PendingComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    ModalModule,
    BsDatepickerModule,
    SharedModule,
  ],
  exports: [
    TodaysComponent,
    UrgentComponent,
    UpcomingComponent,
    PendingComponent,
  ],
})
export class PagesModule {}
