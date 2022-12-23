import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialSheetsModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArchiveComponent } from './components/archive/archive.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MaterialSheetsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ArchiveComponent,
    NotFoundComponent,
    ListComponent,
  ],

  // providers: [LocalStorageRefService],

  bootstrap: [AppComponent],
})
export class AppModule {}
