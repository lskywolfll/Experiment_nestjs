import { Body, Controller, Post } from '@nestjs/common';
import { ofuscateEmail } from 'src/common/email';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('emails')
export class EmailsController {
  @Post()
  changeEmails(@Body() createEmailDto: CreateEmailDto) {
    const newMail = ofuscateEmail(createEmailDto.oldEmail);
    return newMail;
  }
}
