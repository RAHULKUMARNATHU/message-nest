import { Controller, Get, Post } from '@nestjs/common';


@Controller('messages')
export class MessagesController {

    @Get()
    listMessage (){

    }

    @Post()
    createMessage (){

    }

    @Get('/:id')
    getMessage (){

    }



}
