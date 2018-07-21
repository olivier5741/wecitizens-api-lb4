/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {DistrictSearchResponse} from '../models/district-search-response.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by district
 * 
 */
export class DistrictController {
  constructor() {}

  /**
   * For first app release, set the main election key (`2018_be_municipal`) to `election_key` and whether the voter enters a number or not use `code_contains` or `name_contains`
   */
  @operation('get', '/vote/district/search')
  async voteDistrictSearchGet(@param({name: 'election_key', in: 'query'}) election_key: string, @param({name: 'code_contains', in: 'query'}) code_contains: string, @param({name: 'name_contains', in: 'query'}) name_contains: string): Promise<DistrictSearchResponse> {
    throw new Error('Not implemented');
  }

}

