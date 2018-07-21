import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - search_response
 * search_response
 */
@model({name: 'search_response'})
export class SearchResponse {
  constructor(data?: Partial<SearchResponse>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * paging first item where to begin the page
   */
  @property({name: 'start'})
  start?: number;

  /**
   * paging max amount of items
   */
  @property({name: 'limit'})
  limit?: number;

}

