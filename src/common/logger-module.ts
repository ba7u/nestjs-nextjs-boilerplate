import { Logger } from '@nestjs/common';

export class LoggerModule extends Logger {
  protected serviceName = 'logger';

  constructor() {
    super(process.env.PORT);
  }

  /**
   * log
   */
  log(message: string) {
    super.log(`[${this.serviceName}] ${message}`);
  }

  /**
   * error
   */
  error(message: string, trace?: any) {
    super.error(`[${this.serviceName}] ${message}`, trace);
  }

  /**
   * warn
   */
  warn(message: string) {
    super.warn(`[${this.serviceName}] ${message}`);
  }

  /**
   * debug
   */
  debug(message: string) {
    super.debug(`[${this.serviceName}] ${message}`);
  }

  /**
   * verbose
   */
  verbose(message: string) {
    super.verbose(`[${this.serviceName}] ${message}`);
  }
}
