import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-menu-restrito',
  templateUrl: './restrito.component.html',
  styleUrls: ['./restrito.component.css']
})
export class MenuRestritoComponent {
  constructor(private router: Router,
    private _loginService: LoginService) { }
  logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['/login']);
  }
}

