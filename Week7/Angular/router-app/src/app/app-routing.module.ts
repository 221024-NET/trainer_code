import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const routes: Routes = [
  {path: 'contacts' , component: ContactListComponent},
  {path: 'contact/:id' , component: ContactDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'contacts'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
