import { Politician } from '../models/politician.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by politician
 *
 */
export declare class PoliticianController {
    constructor();
    /**
     * Info returned for politician not yet complete.
  Mock id `politician_be_1430`
  
     */
    dirPoliticianGet(id: string): Promise<Politician>;
}
