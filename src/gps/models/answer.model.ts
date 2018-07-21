import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - answer
 * an answer
 */
@model({name: 'answer'})
export class Answer {
  constructor(data?: Partial<Answer>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'value'})
  value?: string;

  /**
   * 
   */
  @property({name: 'tolerance'})
  tolerance?: string;

  /**
   * 
   */
  @property({name: 'question_key'})
  question_key?: string;

}

