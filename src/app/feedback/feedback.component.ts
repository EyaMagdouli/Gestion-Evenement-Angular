import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/Feedback';
import { FeedbackService } from '../services/feedback/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  getFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(feedbacks => {
      this.feedbacks = feedbacks;
    });
  } 

  addFeedback(text: string): void {
    const newFeedback: Feedback = { description:text };
    this.feedbackService.addFeedback(newFeedback).subscribe(feedback => {
      console.log(feedback)
      this.feedbacks.push(feedback);
    });
  }

  deleteFeedback(feedback: Feedback): void {
    this.feedbackService.deleteFeedback(feedback).subscribe(() => {
      this.feedbacks = this.feedbacks.filter(f => f !== feedback);
    });
  }


  feedToBeUpdated:Feedback={idFeed:0,description:'',dateFeed:null};
  edit(feedback:any){
    if(this.feedToBeUpdated.idFeed == 0){
      this.feedToBeUpdated = feedback;
    }else{

      this.feedbackService.editFeedback(feedback).subscribe(() => {
        
      });
      this.feedToBeUpdated={idFeed:0,description:'',dateFeed: ''};
    }
    
  }
}
