export class TagSearchFilter {
    constructor(
        public pageSize: number,
        public page: number,
        public name?: string,
        public description?: string,
        public unit?: string,
        public other?: { [key: string]: string }
    ) { }
}