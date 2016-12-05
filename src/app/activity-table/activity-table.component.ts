import { Component, OnInit } from '@angular/core';
import { Event } from '../Data/event';
import { Activity } from '../Data/activity';
import { Http } from '@angular/http';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.css']
})
export class ActivityTableComponent implements OnInit {

  constructor() { }

  events: Event[];
  activities: Activity[];

  initData()
  {
    var activitiesURL = 'http://localhost:5000/api/Activities';
    var eventsURL = 'http://localhost:5000/api/Events';

    http.get(activitiesURL).success( function(response) {
      this.activities = response; 
    });

    http.get(eventsURL).success( function(response) {
      this.events = response; 
    });
  }

  ngOnInit() {
    this.initData();
  }
  
}
