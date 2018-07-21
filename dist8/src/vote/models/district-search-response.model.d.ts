import { SearchResponse } from '../../models/search-response.model';
import { District } from './district.model';
import { Translations } from '../../models/translations.model';
/**
 * The model type is generated from OpenAPI schema - district_search_response
 */
export declare type DistrictSearchResponse = SearchResponse & {
    data?: District[];
} & Translations;
