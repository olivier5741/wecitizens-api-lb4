import { Submission } from '../models/submission.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by answer
 *
 */
export declare class AnswerController {
    constructor();
    /**
     * > Do not fill in `segment_key` when this is a voter submission
  
     */
    gpsSubmissionPost(): Promise<Submission>;
    /**
     * Mock id `0dc3634b-5561-42d6-9b8c-c5c68b93bfd5`
     */
    gpsSubmissionGet(id: string): Promise<Submission>;
    /**
     *
     */
    gpsSubmissionPut(id: string): Promise<Submission>;
}
