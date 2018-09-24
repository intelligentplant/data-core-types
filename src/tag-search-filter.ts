export interface TagSearchFilter {
    name?: string;
    description?: string;
    unit?: string;
    other?: { [key: string]: string };
    pageSize: number;
    page: number;
}