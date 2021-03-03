/**
 * @public
 */
export declare class Calendar {
    events: Event[];
}
/**
 * @public
 */
export interface Event {
    startTime: Date;
    endTime: Date;
    title: string;
    participants: string[];
}
