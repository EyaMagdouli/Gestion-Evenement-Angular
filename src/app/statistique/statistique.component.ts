import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-my-chart',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatisticsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.http.get<number[]>('http://localhost:8083/users').subscribe(
      (users) => {
        const events = [50, 100, 75, 125, 90, 110]; 
        this.renderChart(users, events);
      },
      (error) => {
        console.error(
          'Failed to fetch user data from the backend. Using fake data instead.',
          error
        );
        const fakeUsers = [300, 125, 75, 90, 110];
        const events = [50, 100, 75, 125, 90, 110]; 
        this.renderChart(fakeUsers, events);
      }
    );
  }

  renderChart(users: number[], events: number[]): void {
    var myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Users',
            data: users,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Events',
            data: events,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
