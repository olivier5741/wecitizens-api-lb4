import {SearchResponse} from '../../models/search-response.model';
import {District} from './district.model';
import {Translations} from '../../models/translations.model';
/**
 * The model type is generated from OpenAPI schema - district_search_response
 */
export type DistrictSearchResponse = SearchResponse & {
  data?: District[];
} & Translations;

