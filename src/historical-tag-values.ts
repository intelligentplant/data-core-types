import { TagValue } from "./tag-value";

export class HistoricalTagValues {
    constructor(
        public TagName: string,
        public DisplayType: string,
        public Values: TagValue[]
    ) { }
}

export type HistoricalTagValuesDictionary = { [tagName: string]: HistoricalTagValues };

export type HistoricalTagValuesDataSourceDictionary = { [dsn: string]: HistoricalTagValuesDictionary };
