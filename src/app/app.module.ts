import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule} from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'contact', component: ContactComponent}]),
  ],
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    AboutMeComponent,
    HomepageComponent,
    ResumeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
