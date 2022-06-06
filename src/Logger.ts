export const getCurrentTimestamp = (): string => {
    return new Date().toISOString();
}

export class Logger {

    private constructor() {
    }

    public static log(message: string): void {
        console.log(`${getCurrentTimestamp()}`, message);
    }

    public static error(message: string): void {
        console.error(`${getCurrentTimestamp()}`, message);
    }

    public static warn(message: string): void {
        console.warn(`${getCurrentTimestamp()}`, message);
    }
}
