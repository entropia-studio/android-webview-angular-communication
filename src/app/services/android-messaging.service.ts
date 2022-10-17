import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AndroidMessagingService {
  private listeners: MessageListener[] = [];

  constructor() {
    this.listenForWindowMessage();
  }

  listenForWindowMessage() {
    window.addEventListener('message', (event: any) => {
      this.handleWindowMessage(event.detail);
    });
  }

  handleWindowMessage(eventPayload: EventPayload) {
    if (eventPayload) {
      this.listeners.forEach((listener) => {
        listener.onMessage(eventPayload);
      });
    }
  }

  addListener(messageListener: MessageListener) {
    this.listeners.push(messageListener);
  }

  removeListener(messageListener: MessageListener) {
    this.listeners = this.listeners.filter(
      (currMessageListener) => messageListener === messageListener
    );
  }
}

export interface MessageListener {
  onMessage(messageEvent: EventPayload): any;
}

export class EventPayload {
  eventType!: string;
  payload: any;
}
