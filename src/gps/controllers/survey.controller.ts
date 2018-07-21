/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {Survey} from '../models/survey.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by survey
 * 
 */
export class SurveyController {
  constructor() {}

  /**
   * 
   */
  @operation('get', '/gps/survey/{key}')
  async gpsSurveyGet(@param({name: 'key', in: 'path'}) key: string): Promise<Survey> {
    throw new Error('Not implemented');
  }

}

