/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {Submission} from '../models/submission.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by answer
 * 
 */
export class AnswerController {
  constructor() {}

  /**
   * > Do not fill in `segment_key` when this is a voter submission

   */
  @operation('post', '/gps/submission')
  async gpsSubmissionPost(): Promise<Submission> {
    throw new Error('Not implemented');
  }

  /**
   * Mock id `0dc3634b-5561-42d6-9b8c-c5c68b93bfd5`
   */
  @operation('get', '/gps/submission/{id}')
  async gpsSubmissionGet(@param({name: 'id', in: 'path'}) id: string): Promise<Submission> {
    throw new Error('Not implemented');
  }

  /**
   * 
   */
  @operation('put', '/gps/submission/{id}')
  async gpsSubmissionPut(@param({name: 'id', in: 'path'}) id: string): Promise<Submission> {
    throw new Error('Not implemented');
  }

}

