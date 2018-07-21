import {SearchResponse} from '../../models/search-response.model';
import {ElectionParty} from './election-party.model';
import {Translations} from '../../models/translations.model';
/**
 * The model type is generated from OpenAPI schema - party_search_response
 */
export type PartySearchResponse = SearchResponse & {
  data?: ElectionParty[];
} & Translations;

