import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'

@Injectable()
export class NodemailerService {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'spotifay89@bk.ru',
        pass: 'AEqA3dnPd0H2GHQqEatY',
      },
    })
  }

  async sendMail(options: nodemailer.SendMailOptions): Promise<void> {
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(options, (error, info) => {
        if (error) {
          console.error('Ошибка отправки сообщения:', error)
        } else {
          console.log('Сообщение отправлено: %s', info.messageId)
        }
      })
      return
    })
  }
}
