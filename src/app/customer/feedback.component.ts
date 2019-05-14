import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Feedback } from './profile-order';

@Component({
    // selector: 'app-rating',

  
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
  })
export class FeedbackComponent implements OnInit{

feedback:Feedback;
 rating: number;
 itemId: number;
 starWidth:number;
  ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {

   
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating,
      starWidth: this.rating * 75/5,
      starColor:"red"
   

    });
    console.log("feedback");
   console.log(this.starWidth);
  }


}


