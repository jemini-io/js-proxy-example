import { Level, logger } from "./FastLogger";

logger.level = Level.INFO;
logger.info({}, "staring up!");
logger.debug({}, "thinking about being an astronaut");
