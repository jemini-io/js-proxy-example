export const LogLevel = {
  INFO: 30,
  DEBUG: 20,
};

export class Logger {
  level = LogLevel.INFO;
  info(data: object, msg: string) {
    const logLine = this.serialize(data, msg);
    this.log(LogLevel.INFO, logLine);
  }
  debug(data: object, msg: string) {
    const logLine = this.serialize(data, msg);
    this.log(LogLevel.DEBUG, logLine);
  }

  serialize(data: object, msg: string): string {
    const logObject = { msg, meta: data };
    const serializedLog = JSON.stringify(logObject);
    return serializedLog;
  }

  log(level: number, json: string): void {
    console.log(level, this.level);
    if (level >= this.level) {
      console.log(json);
    }
  }
}
