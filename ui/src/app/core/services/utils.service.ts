import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private notification: MatSnackBar) { }

  messageNotification(message, action, messagetype) {
    this.notification.open(message, action, {
      duration: 3500,
      panelClass: ['notification', messagetype],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
