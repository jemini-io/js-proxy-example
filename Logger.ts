export class Logger {
  name = "timberrr";
  // info: 30, debug: 20
  level = 30;
  static level = {
    INFO: 30,
    DEBUG: 20,
  };
  info(data: object, msg: string) {
    const logObject = { msg, meta: data };
    const serializedLog = JSON.stringify(logObject);
    if (Logger.level.INFO >= this.level) {
      console.log(serializedLog);
    }
  }
  debug(data: object, msg: string) {
    const logObject = { msg, meta: data };
    const serializedLog = JSON.stringify(logObject);
    new Array(10000 * 4000).fill(1).forEach(() => {});
    if (Logger.level.DEBUG >= this.level) {
      console.log(serializedLog);
    }
  }
}
