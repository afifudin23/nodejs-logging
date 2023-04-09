import winston, { silly } from "winston";

test("logger file transport", () => {
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log"
            }),
        ]
    });

    logger.info("Hello World !!");
});
