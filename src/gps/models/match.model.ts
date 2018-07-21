import {model, property} from '@loopback/repository';
import {Answer} from './answer.model';

/**
 * The model class is generated from OpenAPI schema - match
 * Answers match submission
 */
@model({name: 'match'})
export class Match {
  constructor(data?: Partial<Match>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'segment_key'})
  segment_key?: string;

  /**
   * 
   */
  @property({name: 'answers'})
  answers?: Answer[];

}

