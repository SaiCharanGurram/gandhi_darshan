import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';

const myRoutes : Routes =[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:' ',
    redirectTo:'/home'
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'join',
    component: JoinComponent
  },
  {
    path:'team',
    component: TeamComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path:'press',
    component:PressComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JoinComponent,
    TeamComponent,
    ContactComponent,
    PressComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
