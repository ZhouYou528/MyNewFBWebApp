import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  updateMessage(message: Message) {
    return this.http.put<any>('/messages/update-message/' + message._id, message)
  }

  deleteMessage(message: Message) {
    return this.http.delete<any>('messages/delete-message/' + message._id)
  }

  getNewMessagesNum(username: string) {
    return this.http.get<any>('messages/new-message-number/' + username)
  }
}
