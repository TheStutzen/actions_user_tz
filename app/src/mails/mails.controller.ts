import { Controller } from '@nestjs/common'
import { MailsService } from './mails.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller('mails')
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @MessagePattern('signUp_sendEmail')
  async signUpSendEmail(data: any) {
    return await this.mailsService.signUpSendEmail(data)
  }

  @MessagePattern('remindPass_sendEmail')
  async remindPass(data: any) {
    return await this.mailsService.remindPass(data)
  }
}
