

export class UpdateTodoDto {

    private constructor(
        public readonly id?: number,
        public readonly text?: string,
        public readonly createdAt?: Date
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.text) returnObj.text = this.text;
        if (this.createdAt) returnObj.createdAt = this.createdAt;
        return returnObj;
    }

    /**
     * Recibe una properties que simula
     * el objeto que viene en req.body
     * @param props 
     */
    static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
        const { id, text, createdAt } = props;
        let newCreatedAt = createdAt;

        if (!id || isNaN(Number(id))) {
            return ['Invalid ID', undefined];
        }

        if (createdAt) {
            newCreatedAt = new Date(createdAt);

            if (newCreatedAt.toString() === 'Invalid Date') {
                return ['Invalid Date', undefined];
            }
        }

        return [undefined, new UpdateTodoDto(id, text, newCreatedAt)];
    }
}