import { Uuidentity } from './uuidentity.model';
import { Label } from './label.model';
/**
 * The model type is generated from OpenAPI schema - question
 */
export declare type Question = Uuidentity & Label & {
    notice?: string;
    answer_format?: 'agr_5_scale_tol_3_scale_abs';
};
