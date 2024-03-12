import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}