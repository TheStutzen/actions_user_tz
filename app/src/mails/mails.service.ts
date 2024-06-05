import { Injectable } from '@nestjs/common'
import { NodemailerService } from 'app/nodemailer/nodemailer.service'

@Injectable()
export class MailsService {
  constructor(private readonly nodemailerService: NodemailerService) {}
  async signUpSendEmail(params: any) {
    const { email, firstName, password } = params
    const body = `
    <h1>Регистрация в Users_TZ</h1>
    <p>Спасибо за регистрацию, ${firstName}!</p>
    <p>Ваш пароль для входа в систему:${password}</p>
    <p>Если вы получили это письмо по ошибке, пожалуйста, просто удалите его. Никаких дополнительных действий с вашей стороны не требуется.</p>
  `

    await this.nodemailerService.sendMail({
      from: '"Users_TZ" <spotifay89@bk.ru>',
      to: email,
      subject: 'Регистрация в Users_TZ',
      html: body,
    })

    return { success: true, message: 'Запрос на отправку письма получен' }
  }

  async remindPass(params: any) {
    const { email, password } = params
    const body = `
    <h1>Восстановление пароля</h1>
    <p>Ваш новый пароль: ${password}  в Users_TZ</p>
    <p>Если вы получили это письмо по ошибке, пожалуйста, просто удалите его. Никаких дополнительных действий с вашей стороны не требуется.</p>`

    await this.nodemailerService.sendMail({
      from: '"Users_TZ" <spotifay89@bk.ru>',
      to: email,
      subject: 'Восстановления пароля в Users_TZ',
      html: body,
    })

    return { success: true, message: 'Запрос на отправку письма получен' }
  }
}
