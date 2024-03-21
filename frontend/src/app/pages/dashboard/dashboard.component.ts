import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  created="";
  ngOnInit() {
    localStorage.setItem("JWT",'');
    localStorage.setItem("EMAIL",'');
    this.created=localStorage.getItem("ACCOUNT")!;
  }
}

