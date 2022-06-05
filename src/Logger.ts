function getCurrentTimestamp(): string {
    return new Date().toISOString();
}

export class Logger {

    private constructor() {
    }

    public static log(message: string): void {
        console.log(message);
    }

    public static error(message: string): void {
        console.error(message);
    }

    public static warn(message: string): void {
        console.warn(message);
    }
}
