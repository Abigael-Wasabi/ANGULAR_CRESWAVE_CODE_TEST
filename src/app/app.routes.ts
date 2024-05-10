import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SignupComponent },
  { path: 'features', component: SignupComponent },
  { path: 'contact', component: SignupComponent },
];
