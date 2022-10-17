import { Component, OnDestroy } from '@angular/core';
import {
  AndroidMessagingService,
  EventPayload,
  MessageListener,
} from './services/android-messaging.service';

declare const Android: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements MessageListener, OnDestroy {
  title = 'Crelan';
  toastText = 'Text to show in Android Toast';
  textFromAndroid!: string;

  constructor(private androidMessagingService: AndroidMessagingService) {
    this.androidMessagingService.addListener(this);
  }

  openToast() {
    Android.showToast(this.toastText);
  }

  onMessage(messageEvent: EventPayload) {
    if (messageEvent.eventType === 'testEvent') {
      this.textFromAndroid = messageEvent.payload;
    }
  }

  ngOnDestroy(): void {
    this.androidMessagingService.removeListener(this);
  }
}
