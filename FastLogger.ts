import { Logger, LogLevel as _LogLevel } from "./Logger";

export const LogLevel = _LogLevel;

type LogLevelType = "info" | "debug";

const _logger = new Logger();
const proxyHandler: ProxyHandler<Logger> = {
  get(target, propName: keyof Logger) {
    if (isLogMethod(propName)) {
      if (getLogLevelOfMethod(propName as LogLevelType) < target.level) {
        return () => {};
      }
    }
    return target[propName];
  },
};

function isLogMethod(propName: string) {
  return ["info", "debug"].includes(propName);
}
function getLogLevelOfMethod(propName: LogLevelType): number {
  if (propName === "info") return LogLevel.INFO;
  if (propName === "debug") return LogLevel.DEBUG;
  throw new Error("error");
}
export const logger = new Proxy<Logger>(_logger, proxyHandler);
