import {Label} from '../../models/label.model';
/**
 * The model type is generated from OpenAPI schema - candidate
 */
export type Candidate = Label & {
  picture?: string;
  politician_id?: string;
  politician_url?: string;
};

