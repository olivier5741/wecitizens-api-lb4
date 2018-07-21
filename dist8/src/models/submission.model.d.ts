import { Uuidentity } from './uuidentity.model';
import { SubmissionUser } from './submission-user.model';
import { Answer } from './answer.model';
/**
 * The model type is generated from OpenAPI schema - submission
 */
export declare type Submission = Uuidentity & {
    time?: string;
    poll_key?: string;
    survey_key?: string;
    segment_key?: string;
    user?: SubmissionUser;
    incomplete?: boolean;
    answers?: Answer[];
};
