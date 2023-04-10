import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { createMessagesDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: createMessagesDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    const message = this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    this.messagesService.delete(id);
  }
}
