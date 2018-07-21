/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {Election} from '../models/election.model';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {ElectionRepository, ElectionDb} from '../../repositories';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by election
 *
 */
export class ElectionController {
    constructor(@repository(ElectionRepository) public repository: ElectionRepository) {
    }

    /**
     * For first app release, GET `2018_be_municipal`
     */
    @operation('get', '/vote/election/{key}')
    async voteElectionGet(@param({name: 'key', in: 'path'}) key: string): Promise<Election> {
        let e = await this.repository.findById(1);
        return new Promise<Election>((resolve => resolve(
            {
                id: e.id.toString(),
                key: e.year + "_be_municipal"
            })))
    }

    /**
     * For first app release, set the main election key (`2018_be_municipal`) to  `main_election_key` and `district_key` depends on what the voter chose as district (drop down list)
     */
    @operation('get', '/vote/election/{main_election_key}/district/{district_key}')
    async voteElectionByDistrictGet(@param({
        name: 'main_election_key',
        in: 'path'
    }) main_election_key: string, @param({name: 'district_key', in: 'path'}) district_key: string): Promise<Election> {
        throw new Error('Not implemented');
    }

}

