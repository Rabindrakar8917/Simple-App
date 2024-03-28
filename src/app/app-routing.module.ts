import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './postdetails/postdetails.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: HomeComponent },
  { path: 'post/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
