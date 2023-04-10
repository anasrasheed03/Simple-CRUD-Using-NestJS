import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = JSON.parse(await readFile('messages.json', 'utf8'));
    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages;
  }

  async create(content: string) {
    const messages = JSON.parse(await readFile('messages.json', 'utf8'));
    const randomIdNumber = Math.floor(Math.random() * 999);
    messages[randomIdNumber] = { id: randomIdNumber, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }

  async delete(id: string) {
    const messages = JSON.parse(await readFile('messages.json', 'utf-8'));
    delete messages[id];
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
