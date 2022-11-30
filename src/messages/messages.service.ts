import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';
@Injectable()
export class MessagesService {
  // messagesRepo:MessageRepository ;

  constructor(public messagesRepo: MessageRepository) {
    // this.messagesRepo = new MessageRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
