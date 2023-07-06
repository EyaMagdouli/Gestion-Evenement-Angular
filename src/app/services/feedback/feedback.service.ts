import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from 'src/app/models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8089/feedback';

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl + '/getfeedbacks');
  }

  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl+'/addfeedback', feedback);
  }

  deleteFeedback(feedback: Feedback): Observable<void> {
    const url = `${this.apiUrl}/delfeedback/${feedback.idFeed}`;
    return this.http.delete<void>(url);
  }

  editFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.put<Feedback>(this.apiUrl+'/editfeedback', feedback);
  }

  
}
