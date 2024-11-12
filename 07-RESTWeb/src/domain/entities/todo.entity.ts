

export class TodoEntity {
    constructor(
        public id: number,
        public text: string,
        public createdAt?: Date | null
    ) {

    }

    /**
     * Indica si la entidad fue creada
     */
    get isCreated() {
        return !!this.createdAt;
    }


    /**
     * Validar si la entidad es válida
     * @param obj 
     */
    public static fromObject(obj: { [key: string]: any }) {
        const { id, text, createdAt } = obj;
        if (!id) throw new Error('id is required');
        if (!text) throw new Error('text is required');

        let newCreatedAt;
        if (createdAt) {
            newCreatedAt = new Date(createdAt);
            if (isNaN(newCreatedAt.getTime())) {
                throw new Error('Invalid date');
            }
        }

        return new TodoEntity(id, text, newCreatedAt);
    }

}