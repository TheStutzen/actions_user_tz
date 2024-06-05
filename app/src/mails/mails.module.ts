import { Module } from '@nestjs/common'
import { MailsService } from './mails.service'
import { MailsController } from './mails.controller'
import { NodemailerModule } from 'app/nodemailer/nodemailer.module'

@Module({
  imports: [NodemailerModule],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule {}
