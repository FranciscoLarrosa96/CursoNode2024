

export class PaginationDto {
    private constructor(
        public readonly page: number,
        public readonly limit: number,
    ) {

    }

    static create(page: number = 1, limit: number = 10): [string?, PaginationDto?] {
        if (isNaN(page) || isNaN(limit)) {
            return ['Invalid page or limit', undefined];
        }

        if (page < 1 || limit < 1) {
            return ['Invalid page or limit', undefined];
        }

        return [undefined, new PaginationDto(page, limit)];
    }
}