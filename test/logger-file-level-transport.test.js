import winston, { silly } from "winston";

test("logger file level transport", () => {
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log",
            }),
            new winston.transports.File({
                level: "error",
                filename: "app-error.log"
            }),
        ]
    });

    logger.info("Hello World !!!");
    logger.error("Hello World Error !!!");
});
