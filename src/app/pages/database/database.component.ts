import { Component, OnInit } from '@angular/core';
import { Database } from 'src/app/model/databases.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  databases: Database[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getDatabases().subscribe(results =>
      this.databases = results
    );
  }

}
