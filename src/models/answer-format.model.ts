import {Label} from './label.model';
import {AnswerFormatItem} from './answer-format-item.model';
import {AnswerFormatTolerance} from './answer-format-tolerance.model';
/**
 * The model type is generated from OpenAPI schema - answer_format
 */
export type AnswerFormat = Label & {
  items?: AnswerFormatItem[];
  tolerance?: AnswerFormatTolerance;
};

