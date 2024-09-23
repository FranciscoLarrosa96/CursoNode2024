interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

// Un caso de uso es un codigo que esta especializado en una tarea
export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {}

    async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on Check Service ${url}`);
            }
            this.successCallback();

            return true;
        } catch (error) {
            this.errorCallback(`${error}`)

            return false;
        }


    }
}