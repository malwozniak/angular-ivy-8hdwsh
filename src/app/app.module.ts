import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './components/list/list.component';
import { RandomComponent } from './components/random/random.component';
import { RandomService } from './services/random.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListService } from './services/list.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule],
  declarations: [AppComponent, HelloComponent, ListComponent, RandomComponent],
  bootstrap: [AppComponent],
  providers: [RandomService, ListService],
})
export class AppModule {}
