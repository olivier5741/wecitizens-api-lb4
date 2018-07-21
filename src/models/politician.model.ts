import {Uuidentity} from './uuidentity.model';
import {Label} from './label.model';
/**
 * The model type is generated from OpenAPI schema - politician
 */
export type Politician = Uuidentity & Label & {
  first_name?: string;
  last_name?: string;
};

