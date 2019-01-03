import { EventMessageProperty } from "./event-message-property";

export class EventMessage {
    constructor(
        public ID: string,
        public SourceSystem: string,
        public Source: string,
        public UtcEventTime: Date,
        public Catcgory: string,
        public Name: string,
        public Seq: string,
        public Message: string,
        public Properties: EventMessageProperty[],
        public RawMessage: string
    ) { }
}
