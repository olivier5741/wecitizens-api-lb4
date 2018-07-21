import { DistrictSearchResponse } from '../models/district-search-response.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by district
 *
 */
export declare class DistrictController {
    constructor();
    /**
     * For first app release, set the main election key (`2018_be_municipal`) to `election_key` and whether the voter enters a number or not use `code_contains` or `name_contains`
     */
    voteDistrictSearchGet(election_key: string, code_contains: string, name_contains: string): Promise<DistrictSearchResponse>;
}
