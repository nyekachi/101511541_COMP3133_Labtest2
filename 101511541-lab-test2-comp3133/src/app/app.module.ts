import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterlistComponent } from './characterlist/characterlist.component';
import { CharacterfilterComponent } from './characterfilter/characterfilter.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterlistComponent,
    CharacterfilterComponent,
    CharacterdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
