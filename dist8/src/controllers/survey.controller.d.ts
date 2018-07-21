import { Survey } from '../models/survey.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by survey
 *
 */
export declare class SurveyController {
    constructor();
    /**
     *
     */
    gpsSurveyGet(key: string): Promise<Survey>;
}
