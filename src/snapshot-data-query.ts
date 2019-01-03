export class SnapshotDataQuery {
    constructor(public tags: { [dsn: string]: string[] }) { }
}