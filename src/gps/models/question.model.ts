import {Uuidentity} from '../../models/uuidentity.model';
import {Label} from '../../models/label.model';
/**
 * The model type is generated from OpenAPI schema - question
 */
export type Question = Uuidentity & Label & {
  notice?: string;
  answer_format?: 'agr_5_scale_tol_3_scale_abs';
};

