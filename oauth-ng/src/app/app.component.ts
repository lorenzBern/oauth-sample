import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'oauth-ng';
  userInfo$: Observable<any> | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.userInfo$ = this.httpClient.get<string>('user');
  }

}
