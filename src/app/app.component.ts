import { Component } from '@angular/core';
import { Activity } from './data/activity';
import { Event } from './data/event';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { EventserviceService } from './Eventservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventserviceService]
})
export class AppComponent {
  title = 'Events';
  activities: Activity[];
  events: Event[];

  constructor(private eventserviceService: EventserviceService) { }

  initData()
  {
     //window.alert("test");
     this.eventserviceService.getEvents().then(events => this.events = events);
     this.eventserviceService.getActivities().then(activities => this.activities = activities);
     //window.alert(this.events.length);
     //window.alert(this.activities.length);  
  }

  getDescription(activityID: number)
  {
    if(this.activities === undefined)
    {
      return "Loading...";
    }
    for(let i = 0; i < this.activities.length; i++)
    {
      if(this.activities[i].activityID == activityID)
      {
        return this.activities[i].activityDescription;
      }
    }
    return "None Found";
  }

  ngOnInit(){ this.initData() }
}
