import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { title } from 'process';

@Injectable()
export class BooksService {
  books = [
    {
      id: 0,
      title: "igen",
      author: "en",
      isbn: "nagyon egyedi",
      publishYear: 2000,
      reserved: false
    },
    {
      id: 1,
      title: "igen 2",
      author: "en 2",
      isbn: "nagyon egyedi 2",
      publishYear: 2002,
      reserved: true
    }
  ]

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books[id];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
