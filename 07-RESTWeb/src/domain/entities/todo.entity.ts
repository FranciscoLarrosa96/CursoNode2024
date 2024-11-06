

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
    get isCreated(){
        return !!this.createdAt;
    }

}