import { Component, OnInit,Input } from '@angular/core';
import {Quote} from "../qoute"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quote
  constructor() { }

  ngOnInit() {
  }

}