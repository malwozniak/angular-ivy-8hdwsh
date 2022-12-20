import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './components/list/list.component';
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
import { ArchiveComponent } from './components/archive/archive.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatMomentDateModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [AppComponent, HelloComponent, ListComponent, ArchiveComponent],
  bootstrap: [AppComponent],
  providers: [ListService],
})
export class AppModule {}
