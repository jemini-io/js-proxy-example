import { LogLevel, logger } from "./FastLogger";

// Compare with...
// import { LogLevel, Logger } from "./Logger";
// const logger = new Logger();

// Create an object that's expensive to serialize.
const largeObject: Record<string, any> = {};
new Array(10000 * 1000).fill("").forEach((el: string, index) => {
  largeObject[+index] = el;
});

// Run your logger
logger.level = LogLevel.INFO;
logger.info({}, "staring up!");
logger.debug({ largeObject }, "thinking about being an astronaut");
