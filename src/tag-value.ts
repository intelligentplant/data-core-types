export interface TagValue {
    TagName: string;
    UtcSampleTime: Date;
    NumericValue: number;
    TextValue: string;
    Status: string | number;
    Unit: string;
    Notes: string;
    Error: string;
    HasError: boolean;
}
