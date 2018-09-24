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

/*

/// <summary>
        /// Gets or sets the ID for the event object.
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// Gets or sets the ID or name of the event source that generated the event.
        /// </summary>
        public string SourceSystem { get; set; }

        /// <summary>
        /// Gets or sets the source identifier for the event.
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// Gets or sets the UTC event time.
        /// </summary>
        public DateTime UtcEventTime { get; set; }

        /// <summary>
        /// Gets or sets the event category.
        /// </summary>
        public string Category { get; set; }

        /// <summary>
        /// Gets or sets the event name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets a sequence number for the message.
        /// </summary>
        /// <remarks>
        /// This is an ordinal that can be used in conjunction with <see cref="UtcEventTime"/> to determine the order 
        /// that event messages were receive.
        /// </remarks>
        public long Seq { get; set; }

        /// <summary>
        /// Gets or sets the event message text.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// The event properties.
        /// </summary>
        private ICollection<EventProperty> _properties;

        /// <summary>
        /// Gets or sets the event properties.
        /// </summary>
        [NotNull]
        public ICollection<EventProperty> Properties {
            get { return _properties; }
            set { _properties = value ?? new List<EventProperty>(); }
        }

        /// <summary>
        /// Gets or sets the raw message from the event source.
        /// </summary>
        /// <remarks>
        /// For event sources such as control systems, this field should be populated with the message that was received from the source.
        /// </remarks>
        public string RawMessage { get; set; }
*/