import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: any;
  newFormation: any = {};
  editingFormation: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.http.get("http://localhost:8082/formation/formations")
      .subscribe((data) => this.formations = data);
  }

  createFormation(formation: any): void {
    this.http.post("http://localhost:8082/formation/addformation", formation)
      .subscribe((data) => {
        console.log("Formation created:", data);
        this.getFormations();
      });
  }

  updateFormation(formation: any): void {
    const url = `http://localhost:8082/formation/editformation/${formation.id}`;
    this.http.put(url, formation)
      .subscribe((data) => {
        console.log("Formation updated:", data);
        this.getFormations();
        this.cancelEdit();
      });
  }

  cancelEdit(): void {
    this.editingFormation = null;
    this.newFormation = {};
  }

  deleteFormation(id: number): void {
    const url = `http://localhost:8082/formation/deleteformation/${id}`;
    this.http.delete(url)
      .subscribe(() => {
        console.log("Formation deleted");
        this.getFormations();
      });
  }
}