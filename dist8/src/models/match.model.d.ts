import { Answer } from './answer.model';
/**
 * The model class is generated from OpenAPI schema - match
 * Answers match submission
 */
export declare class Match {
    constructor(data?: Partial<Match>);
    /**
     *
     */
    segment_key?: string;
    /**
     *
     */
    answers?: Answer[];
}
