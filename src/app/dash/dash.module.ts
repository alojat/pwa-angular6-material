import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashComponent } from './dash.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, MatSidenavModule, FormsModule, BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  declarations: [DashComponent]
})
export class DashModule { }
