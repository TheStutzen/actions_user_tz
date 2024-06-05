import { MicroserviceOptions, Transport } from '@nestjs/microservices'

export const microServiceConfig: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'mailer',
    port: 3050,
  },
}
