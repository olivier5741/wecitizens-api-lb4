import { Uuidentity } from './uuidentity.model';
import { Label } from './label.model';
import { Question } from './question.model';
import { AnswerFormat } from './answer-format.model';
import { Translations } from './translations.model';
/**
 * The model type is generated from OpenAPI schema - survey
 */
export declare type Survey = Uuidentity & Label & {
    questions_order?: string[];
    questions?: Question[];
    answer_formats?: AnswerFormat[];
} & Translations;
