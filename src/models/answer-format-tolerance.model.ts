import {model, property} from '@loopback/repository';
import {AnswerFormatItem} from './answer-format-item.model';

/**
 * The model class is generated from OpenAPI schema - answer_format_tolerance
 * answer_format_tolerance
 */
@model({name: 'answer_format_tolerance'})
export class AnswerFormatTolerance {
  constructor(data?: Partial<AnswerFormatTolerance>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'absolute'})
  absolute?: boolean;

  /**
   * 
   */
  @property({name: 'items'})
  items?: AnswerFormatItem[];

}

