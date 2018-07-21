import { Election } from '../models/election.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by election
 *
 */
export declare class ElectionController {
    constructor();
    /**
     * For first app release, GET `2018_be_municipal`
     */
    voteElectionGet(key: string): Promise<Election>;
    /**
     * For first app release, set the main election key (`2018_be_municipal`) to  `main_election_key` and `district_key` depends on what the voter chose as district (drop down list)
     */
    voteElectionByDistrictGet(main_election_key: string, district_key: string): Promise<Election>;
}
