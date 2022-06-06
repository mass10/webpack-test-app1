import { getCurrentTimestamp, Logger } from "./Logger";

class Application {

    public constructor() {

    }

    public run(): void {
        let aa = "";
        aa += getCurrentTimestamp();
        Logger.log(`${aa} Hello World!`);
    }
}

function main(): void {

    Logger.log("### START ###");

    const app = new Application();
    app.run();

    Logger.log("--- END ---");
}

main();
