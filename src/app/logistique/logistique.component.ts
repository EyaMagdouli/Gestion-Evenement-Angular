import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.css']
})
export class LogistiqueComponent implements OnInit {
  logistiques: any;
  newLogistiques: any = {};
  editingLogistiques: any = null;
  selectedLogistique: any;
  sortColumn: string = '';
  sortDirection: string = 'asc';

  @ViewChild('editModal') editModalRef!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLogistiques();
  }
  
  getLogistiques(): void {
    this.http.get<any[]>("http://localhost:8082/logistiques/getlog")
      .subscribe((data) => {
        this.logistiques = data;
        if (this.logistiques && this.logistiques.length > 0) {
          this.selectedLogistique = this.logistiques[0]; // Set the first logistique as the selected one
        }
      });
  }
  
  
  sortTable(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }



  createLogistique(): void {
    this.http.post("http://localhost:8082/logistiques/addlog", this.newLogistiques)
      .subscribe((data) => {
        console.log("Logistique created:", data);
        this.getLogistiques();
        this.newLogistiques = {};
      });
  }

  updateLogistique(logistique: any): void {
    const url = `http://localhost:8082/logistiques/updatelog/${logistique.idLog}`;
    this.http.put(url, logistique)
      .subscribe((data) => {
        console.log("Logistique updated:", data);
        this.getLogistiques();
        this.cancelEdit();
      });
  }

  cancelEdit(): void {
    this.selectedLogistique = null;
    const editModalElement: HTMLElement = document.getElementById('editModal')!;
    editModalElement.style.display = 'none';
    const modalBackdropElement: HTMLElement = document.getElementsByClassName('modal-backdrop')[0] as HTMLElement;
    if (modalBackdropElement) {
      modalBackdropElement.remove();
    }
    document.body.classList.remove('modal-open');
  }

  deleteLogistique(id: number): void {
    const url = `http://localhost:8082/logistiques/deletelog/${id}`;
    this.http.delete(url)
      .subscribe(() => {
        console.log("Logistique deleted");
        this.getLogistiques();
      });
  }

  getDisponibiliteBadgeClass(disponibilite: boolean): string {
    return disponibilite ? "bg-success" : "bg-danger";
  }

  getDisponibiliteText(disponibilite: boolean): string {
    return disponibilite ? "Disponible" : "Hors stock";
  }

  getStatusProgressBarClass(statusPercentage: number): string {
    if (statusPercentage >= 70) {
      return "bg-success";
    } else if (statusPercentage >= 30) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }

  openEditModal(logistique: any): void {
    this.selectedLogistique = { ...logistique };
    const editModalElement: HTMLElement = this.editModalRef.nativeElement;
    editModalElement.classList.add('show');
    editModalElement.style.display = 'block';
  }

  saveLogistiqueChanges(): void {
    this.updateLogistique(this.selectedLogistique);
    const editModalElement: HTMLElement = this.editModalRef.nativeElement;
    editModalElement.classList.remove('show');
    editModalElement.style.display = 'none';
  }
}