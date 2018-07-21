import { Uuidentity } from '../../models/uuidentity.model';
import { Label } from '../../models/label.model';
/**
 * The model type is generated from OpenAPI schema - politician
 */
export declare type Politician = Uuidentity & Label & {
    first_name?: string;
    last_name?: string;
};
