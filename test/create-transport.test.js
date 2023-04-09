import winston from "winston";
import TransportStream from "winston-transport";

test("create my transports", () => {
    class myTransport extends TransportStream {

        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }

    };

    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new myTransport({})
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
