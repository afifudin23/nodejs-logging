import winston from "winston";

test("logger format", () => {
    const logger = winston.createLogger({
        level: "debug",
        // format: winston.format.json(),
        // format: winston.format.logstash(),
        // format: winston.format.simple(),
        format: winston.format.printf((info) => `${new Date()} | ${info.level}: ${info.message}`),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Console Error");
    logger.warn("Console Warning");
    logger.info("Console Info");
    logger.http("Console HTTP");
    logger.verbose("Console Verbose");
    logger.debug("Console Debug");
    logger.silly("Console Silly");
});
