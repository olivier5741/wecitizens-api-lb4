/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {MatchResponse} from '../models/match-response.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by match
 * 
 */
export class MatchController {
  constructor() {}

  /**
   * 
   */
  @operation('post', '/gps/match')
  async gpsMatchPost(): Promise<MatchResponse> {
    throw new Error('Not implemented');
  }

}

