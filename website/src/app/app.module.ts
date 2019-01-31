import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { SidebarComponent } from './article-details/sidebar/sidebar.component';
import { GalleryComponent } from './article-details/gallery/gallery.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LastArticleComponent } from './home-page/last-article/last-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CommentComponent,
    CommentsComponent,
    SidebarComponent,
    GalleryComponent,
    SubscribeComponent,
    LastArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
