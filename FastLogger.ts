import { Logger, LogLevel as _LogLevel } from "./Logger";

export const LogLevel = _LogLevel;

const _logger = new Logger();
const proxyHandler: ProxyHandler<Logger> = {
  get(target, propName: keyof Logger) {
    if (isLogMethod(propName)) {
      let requestedLogLevel: number = 0;
      if (propName === "info") requestedLogLevel = LogLevel.INFO;
      if (propName === "debug") requestedLogLevel = LogLevel.DEBUG;
      if (requestedLogLevel < target.level) {
        return () => {};
      }
    }
    return target[propName];
  },
};

function isLogMethod(propName: string) {
  return ["info", "debug"].includes(propName);
}
export const logger = new Proxy<Logger>(_logger, proxyHandler);
