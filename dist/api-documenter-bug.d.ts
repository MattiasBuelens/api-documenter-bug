
/**
 * @public
 */
export declare class Calendar {
    events: Event_2[];
}

/**
 * @public
 */
declare interface Event_2 {
    startTime: Date;
    endTime: Date;
    title: string;
    participants: string[];
}
export { Event_2 as Event }

export { }
