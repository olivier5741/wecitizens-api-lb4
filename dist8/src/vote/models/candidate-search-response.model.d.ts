import { SearchResponse } from '../../models/search-response.model';
import { Candidate } from './candidate.model';
/**
 * The model type is generated from OpenAPI schema - candidate_search_response
 */
export declare type CandidateSearchResponse = SearchResponse & {
    data?: Candidate[];
};
