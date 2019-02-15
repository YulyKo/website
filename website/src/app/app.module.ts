import { BrowserModule } from '@angular/platform-browser';
import {ElementRef, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './comments/comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { SidebarComponent } from './article-details/sidebar/sidebar.component';
import { GalleryComponent } from './article-details/gallery/gallery.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LastArticleComponent } from './home-page/last-article/last-article.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SimilarArticleComponent } from './article-details/gallery/similar-article/similar-article.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { PlatformModule } from "@angular/cdk/platform";
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleMoreComponent } from './articles-page/article-more/article-more.component';

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
    LastArticleComponent,
    SimilarArticleComponent,
    CommentFormComponent,
    ArticlesPageComponent,
    ArticleComponent,
    ArticleMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule,
    PlatformModule
  ],
  providers: [
    CommentsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
