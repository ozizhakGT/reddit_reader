import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject, Subject} from 'rxjs';
import {Post} from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  chartHasChanged = new Subject<Post[]>();
  posts = new Subject<Post[]>();
  hasPosts = new BehaviorSubject<boolean>(false);
  constructor(private Notification: MatSnackBar) { }

  // NOTIFICATION ALERTS
  notification(message, action, messagetype) {
    this.Notification.open(message, action, {
      duration: 3500,
      panelClass: ['notification', messagetype],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  /*
  * SET POST BY:
  * propArray INDEXES;
  * */
  setPosts(data) {
    let posts = [];
    const propArray: string[] = ['author', 'thumbnail', 'ups', 'created_utc', 'url', 'title'];
    data.forEach( (post, i) => {
      let holder = {};
      propArray.forEach(prop => {
        if (prop === 'created_utc') {
          post[prop] = new Date(post[prop] * 1000)
        }
        holder[prop] = post[prop];
      })
      posts[i] = holder;
    });
    this.chartHasChanged.next(posts);
  }


  /*
  * SET OBJECT FOR CHART
  * name  = hours
  * value = likes
  * */
  setChart(data) {
    let single = [];
    data.forEach(post => {
      let obj = {};
      obj['name']  = new Date(post['created_utc']).getHours();
      obj['value'] = post['ups'];
      single.push(obj);
    });
    return single;
  }
}
