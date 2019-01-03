export class TagValue {
    constructor(
        public TagName: string,
        public UtcSampleTime: Date,
        public NumericValue: number,
        public TextValue: string,
        public Status: string | number,
        public Unit: string,
        public Notes: string,
        public Error: string,
        public HasError: boolean
    ) { }
}

export type SnapshotTagValuesDictionary = { [tagName: string]: TagValue };

export type SnapshotTagValuesDataSourceDictionary = { [dsn: string]: SnapshotTagValuesDictionary };