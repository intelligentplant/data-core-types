interface HistoricalDataQuery {
    tags: { [dsn: string]: string[] }
} 

interface HistoricalDataQueryWithTimeRange extends HistoricalDataQuery {
    startTime: string | Date;
    endTime: string | Date;
}

export interface RawDataQuery extends HistoricalDataQueryWithTimeRange {
    pointCount: number;
}

export interface PlotDataQuery extends HistoricalDataQueryWithTimeRange {
    intervals: number;
}

export interface ProcessedDataQuery extends HistoricalDataQueryWithTimeRange {
    dataFunction: string;
    sampleInterval: string;
}

export interface ValuesAtTimesDataQuery extends HistoricalDataQuery {
    utcSampleTimes: Date[];
}