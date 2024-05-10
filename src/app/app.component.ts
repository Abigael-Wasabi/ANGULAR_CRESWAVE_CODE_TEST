import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent {
  constructor(private router: Router) {}

  navigateToSignUp() {
    // Navigate to the sign-up page
    this.router.navigate(['/signup']);
  }
}
