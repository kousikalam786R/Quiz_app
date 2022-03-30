import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './admin/signup/signup.component';
import { LoginComponent } from './admin/login/login.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuetionComponent } from './quiz/quetions/quetion.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionpipePipe } from './questionpipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    QuizComponent,
    QuetionComponent,
    QuestionpipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
