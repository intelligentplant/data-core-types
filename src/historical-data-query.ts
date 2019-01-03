class HistoricalDataQuery {
    constructor(public tags: { [dsn: string]: string[] }) { }
} 

class HistoricalDataQueryWithTimeRange extends HistoricalDataQuery {
    constructor(
        tags: { [dsn: string]: string[] }, 
        public startTime: string | Date, 
        public endTime: string | Date
    ) {
        super(tags);
    }
}

export class RawDataQuery extends HistoricalDataQueryWithTimeRange {
    constructor(
        tags: { [dsn: string]: string[] }, 
        startTime: string | Date, 
        endTime: string | Date,
        public pointCount: number
    ) {
        super(tags, startTime, endTime);
    }
}

export class PlotDataQuery extends HistoricalDataQueryWithTimeRange {
    constructor(
        tags: { [dsn: string]: string[] }, 
        startTime: string | Date, 
        endTime: string | Date,
        public intervals: number
    ) {
        super(tags, startTime, endTime);
    }
}

export class ProcessedDataQuery extends HistoricalDataQueryWithTimeRange {
    constructor(
        tags: { [dsn: string]: string[] }, 
        startTime: string | Date, 
        endTime: string | Date,
        public dataFunction: string,
        public sampleInterval: string
    ) {
        super(tags, startTime, endTime);
    }
}

export class ValuesAtTimesDataQuery extends HistoricalDataQuery {
    constructor(
        tags: { [dsn: string]: string[] }, 
        public utcSampleTimes: Date[]
    ) {
        super(tags);
    }
}