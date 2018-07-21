import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - match_response_item
 * match_response_item
 */
@model({name: 'match_response_item'})
export class MatchResponseItem {
  constructor(data?: Partial<MatchResponseItem>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'order'})
  order?: number;

  /**
   * 
   */
  @property({name: 'user_id'})
  user_id?: string;

  /**
   * 
   */
  @property({name: 'score'})
  score?: number;

}

