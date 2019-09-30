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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'contact', component: ContactComponent}]),
    PdfViewerModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    AboutMeComponent,
    HomepageComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
