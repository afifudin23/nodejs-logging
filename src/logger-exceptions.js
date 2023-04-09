import winston from "winston";

const logger = winston.createLogger({
    // handleExceptions: true,
    level: "info",
    transports: [
        new winston.transports.File({
            handleExceptions: true,
            filename: "exception.log"
        })
    ]
});

hello();
