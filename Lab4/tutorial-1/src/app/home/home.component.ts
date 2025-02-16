import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homes: Home[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homes = this.homeService.getHomes();
  }
}
