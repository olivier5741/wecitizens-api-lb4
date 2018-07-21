import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - answer_format_item
 * answer_format_item
 */
@model({name: 'answer_format_item'})
export class AnswerFormatItem {
  constructor(data?: Partial<AnswerFormatItem>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'key'})
  key?: string;

  /**
   * 
   */
  @property({name: 'name'})
  name?: string;

  /**
   * 
   */
  @property({name: 'weight'})
  weight?: number;

}

