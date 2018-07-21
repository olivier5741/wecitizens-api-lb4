import { Uuidentity } from '../../models/uuidentity.model';
import { Label } from '../../models/label.model';
/**
 * The model type is generated from OpenAPI schema - poll
 */
export declare type Poll = Uuidentity & Label & {
    survey_key?: string;
    segment_keys?: string[];
    insufficient_data?: boolean;
};
