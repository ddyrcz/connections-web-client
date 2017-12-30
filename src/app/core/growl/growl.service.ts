import { Injectable } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { MessageType } from 'app/core/growl/message-type';

@Injectable()
export class GrowlService {

  messages: Message[] = [];

  // Causes a tests failure
  //constructor(private messageTypeMapper: MessageTypeToSeverityMapper) { }


  map(obj: MessageType): string {
    switch (obj) {
      case MessageType.Success:
        return 'success';
      case MessageType.Information:
        return 'info';
      case MessageType.Warning:
        return 'warn';
      case MessageType.Error:
        return 'error';
    }
  }

  showMessage(messageType: MessageType, title: string, message: string) {
    let severity: string = this.map(messageType)

    let newMessage: Message[] = [{ severity, summary: title, detail: message }];
    this.messages = this.messages.concat(newMessage)
  }

  showError(message: string) {
    this.showMessage(MessageType.Error, "Błąd", message);
  }

  showInformation(message: string) {
    this.showMessage(MessageType.Information, "Informacja", message);
  }

  showSuccess(message: string) {
    this.showMessage(MessageType.Success, "Powodzenie", message);
  }
}
