

export class CreateTodoDto {

    private constructor(
        public readonly text: string,
    ) { }

    /**
     * Recibe una properties que simula
     * el objeto que viene en req.body
     * @param props 
     */
    static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
        const { text } = props;
        if (!text) {
            return ['text is required'];
        }
        return [undefined, new CreateTodoDto(text)];
    }
}