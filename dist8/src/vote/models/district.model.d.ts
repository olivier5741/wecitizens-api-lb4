import { Uuidentity } from '../../models/uuidentity.model';
import { DigitalLabel } from '../../models/digital-label.model';
/**
 * The model type is generated from OpenAPI schema - district
 */
export declare type District = Uuidentity & DigitalLabel & {
    type?: string;
    district_in_keys?: string[];
};
