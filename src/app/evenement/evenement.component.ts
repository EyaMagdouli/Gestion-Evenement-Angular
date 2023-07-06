import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenements: any;
  newEvenement: any = {};
  editingEvenement: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvenements();
  }

  getEvenements(): void {
    this.http.get("http://localhost:8082/evenement/getevents")
      .subscribe((data) => this.evenements = data);
  }

  createEvenement(evenement: any): void {
    this.http.post("http://localhost:8082/evenement/addevent", evenement)
      .subscribe((data) => {
        console.log("Evenement created:", data);
        
        this.getEvenements(); 
      });
  }

  updateEvenement(evenement: any): void {
    const url = `http://localhost:8082/evenement/editevent/${evenement.idEvent}`;
    this.http.put(url, evenement)
      .subscribe((data) => {
        console.log("Evenement updated:", data);
        this.getEvenements();
        this.cancelEdit();
      });
  }

  cancelEdit(): void {
    this.editingEvenement = null;
    this.newEvenement = {};
  }

  deleteEvenement(id: number): void {
    const url = `http://localhost:8082/evenement/delevent/${id}`;
    this.http.delete(url)
      .subscribe(() => {
        console.log("Evenement deleted");
        this.getEvenements();
      });
  }
}