import { EventMessageProperty } from "./event-message-property";

export interface EventMessage {
    ID: string;
    SourceSystem: string;
    Source: string;
    UtcEventTime: Date;
    Category: string;
    Name: string;
    Seq: number;
    Message: string;
    Properties: EventMessageProperty[];
    RawMessage: string;
}
