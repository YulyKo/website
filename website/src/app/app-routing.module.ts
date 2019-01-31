import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'articles/:id', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
