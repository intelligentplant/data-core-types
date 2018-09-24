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

export type SnapshotTagValuesDictionary = { [tagName: string]: TagValue };

export type SnapshotTagValuesDataSourceDictionary = { [dsn: string]: SnapshotTagValuesDictionary };