import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Activity } from './data/activity';
import { Event } from './data/event';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventserviceService {

  constructor(private _http: Http) {
  }

  getActivities() : Promise<Activity[]>
  {
    var activitiesURL = 'http://zenithwebsitev3.azurewebsites.net/api/ActivityAPI';
    return this._http.get(activitiesURL).toPromise().then(response => response.json() as Activity[])
  }

  getEvents() : Promise<Event[]>
  {
    var eventsURL = 'http://zenithwebsitev3.azurewebsites.net/api/EventAPI';
    return this._http.get(eventsURL).toPromise().then(response => response.json() as Event[])
  }

  getResults() : Promise<string>
  {
    var eventsURL = 'http://zenithwebsitev3.azurewebsites.net/api/EventAPI';
    return this._http.get(eventsURL).toPromise().then(response => response.json() as string);
  }
}
