import {model, property} from '@loopback/repository';
import {MatchResponseItem} from './match-response-item.model';

/**
 * The model class is generated from OpenAPI schema - match_response
 * match_response
 */
@model({name: 'match_response'})
export class MatchResponse {
  constructor(data?: Partial<MatchResponse>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'data'})
  data?: MatchResponseItem[];

}

