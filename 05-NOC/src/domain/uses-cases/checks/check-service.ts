interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}



// Un caso de uso es un codigo que esta especializado en una tarea
export class CheckService implements CheckServiceUseCase {
    async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on Check Service ${url}`);
            }
            console.log(`${url} is ok`);
            
            return true;
        } catch (error) {
            console.log("🚀 ~ CheckService ~ execute ~ error:", error)
            
            return false;
        }

        
    }
}