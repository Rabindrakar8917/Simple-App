import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './postdetails/postdetails.component';
import { HomeService } from './service/home.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
