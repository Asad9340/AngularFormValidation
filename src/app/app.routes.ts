import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from '@coreui/angular';
import { Carousel2Component } from './components/carousel2/carousel2.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'carousel2', component: Carousel2Component },
  { path: 'footer', component: FooterComponent },
];