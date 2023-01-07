import { Logger } from "./Logger";

export const Level = Logger.level;
const _logger = new Logger();
const proxyHandler: ProxyHandler<Logger> = {
  get(target, propName: keyof Logger) {
    console.log(`getting the prop: ${propName}`);
    if (typeof target[propName] === "function") {
      let requestedLogLevel: number = 0;
      if (propName === "info") requestedLogLevel = Logger.level.INFO;
      if (propName === "debug") requestedLogLevel = Logger.level.DEBUG;
      if (requestedLogLevel < target.level) {
        console.log("saving time and money!");
        return () => {};
      }
    }
    return target[propName];
  },
};
export const logger = new Proxy<Logger>(_logger, proxyHandler);
