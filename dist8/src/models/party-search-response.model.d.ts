import { SearchResponse } from './search-response.model';
import { ElectionParty } from './election-party.model';
import { Translations } from './translations.model';
/**
 * The model type is generated from OpenAPI schema - party_search_response
 */
export declare type PartySearchResponse = SearchResponse & {
    data?: ElectionParty[];
} & Translations;
