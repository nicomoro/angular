import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HighlightDirective,
    DeveloperComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot (ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
