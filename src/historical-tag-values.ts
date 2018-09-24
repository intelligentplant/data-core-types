import { TagValue } from "./tag-value";

export interface HistoricalTagValues {
    TagName: string;
    DisplayType: string;
    Values: TagValue[];
}

export type HistoricalTagValuesDictionary = { [tagName: string]: HistoricalTagValues };

export type HistoricalTagValuesDataSourceDictionary = { [dsn: string]: HistoricalTagValuesDictionary };
