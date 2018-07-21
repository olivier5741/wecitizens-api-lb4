import {Uuidentity} from '../../models/uuidentity.model';
import {Label} from '../../models/label.model';
import {Question} from './question.model';
import {AnswerFormat} from './answer-format.model';
import {Translations} from '../../models/translations.model';
/**
 * The model type is generated from OpenAPI schema - survey
 */
export type Survey = Uuidentity & Label & {
  questions_order?: string[];
  questions?: Question[];
  answer_formats?: AnswerFormat[];
} & Translations;

