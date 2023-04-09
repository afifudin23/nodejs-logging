import winston from "winston";

test("logger level", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({ level: "error", message: "Console Error" });
    logger.log({ level: "warn", message: "Console Warning" });
    logger.log({ level: "info", message: "Console Info" });
    logger.log({ level: "http", message: "Console HTTP" });
    logger.log({ level: "verbose", message: "Console Verbose" });
    logger.log({ level: "debug", message: "Console Debug" });
    logger.log({ level: "silly", message: "Console Silly" });
});
