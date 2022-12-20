import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './app/components/not-found/not-found.component';
import { ListComponent } from './app/components/list/list.component';
import { ArchiveComponent } from './app/components/archive/archive.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  // w przeciwnym wypadku powrót do home
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
