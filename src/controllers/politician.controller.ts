/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {Politician} from '../models/politician.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by politician
 * 
 */
export class PoliticianController {
  constructor() {}

  /**
   * Info returned for politician not yet complete.
Mock id `politician_be_1430`

   */
  @operation('get', '/dir/politician/{id}')
  async dirPoliticianGet(@param({name: 'id', in: 'path'}) id: string): Promise<Politician> {
    throw new Error('Not implemented');
  }

}

