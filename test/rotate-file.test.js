import winston, { silly } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logger file level transport", () => {
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.simple(),
        transports: [
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "14d"
            }),
            new winston.transports.File({
                level: "error",
                filename: "app-error.log"
            }),
        ]
    });

    for (let i = 0; i < 100000; i++) {
        logger.info(`Hello World ${i}`);
    }
});
