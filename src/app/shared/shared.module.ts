import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ModalComponent } from './home/modal/modal.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { PagesRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    ModalModule,
  ],
  exports: [HomeComponent, HeaderComponent, ModalComponent],
})
export class SharedModule {}
