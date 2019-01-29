
import { Component, OnInit } from '@angular/core';
import {Quote} from '../qoute';

@Component({
  selector: 'app-quote',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes=[new Quote("Hulde","Eleanor Roosevelt","No one can make you feel inferior without your consent"),
new Quote("Hulde","Aristotle","Knowing yourself is the beginning of all wisdom")]
  preNum:number;
  lastNum:number;
  counter:number;

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
