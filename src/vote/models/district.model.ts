import {Uuidentity} from './uuidentity.model';
import {DigitalLabel} from './digital-label.model';
/**
 * The model type is generated from OpenAPI schema - district
 */
export type District = Uuidentity & DigitalLabel & {
  type?: string;
  district_in_keys?: string[];
};

