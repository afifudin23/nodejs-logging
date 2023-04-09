import winston from "winston";

const logger = winston.createLogger({
    // handleExceptions: true,
    // handleRejections: true,
    level: "info",
    transports: Object.assign(
        new winston.transports.Console({
            handleRejections: true
        }),
        new winston.transports.File({
            // handleExceptions: true,
            handleRejections: true,
            handleExceptions: true,
            filename: "rejections.log",
        })
    )
});

async function callAsync() {
    return Promise.reject("Upss!!");
}

callAsync();
