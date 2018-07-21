/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {Election} from '../models/election.model';
import {inject} from '@loopback/core';
import {repository, juggler, Command, Connector, AnyObject} from '@loopback/repository';
import {ElectionRepository, ElectionDb} from '../../repositories';
import * as moment from 'moment';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by election
 *
 */
export class ElectionController {
    constructor(@repository(ElectionRepository) public repository: ElectionRepository,
                @inject('datasources.poldir') public datasource: juggler.DataSource) {
    }

    /**
     * For first app release, GET `2018_be_municipal`
     */
    @operation('get', '/vote/election/{key}')
    async voteElectionGet(@param({name: 'key', in: 'path'}) key: string): Promise<Election> {

        const q = "SELECT \n" +
            "    e.id AS 'id',\n" +
            "    e.Date AS 'date',\n" +
            "    e.year AS 'year',\n" +
            "    e.available AS 'available',\n" +
            "    ei.id_lang AS 'i18nLanguage',\n" +
            "    ei.name AS 'i18nTranslation'\n" +
            "FROM\n" +
            "    election e\n" +
            "        JOIN\n" +
            "    election_texts ei ON e.id = ei.id_election\n" +
            "WHERE\n" +
            "    e.id_parent IS NULL and e.id = 1";

        //let e = await this.repository.findById(1);
        return new Promise<Election>((resolve =>
            this.datasource.connector.execute(q, [], {}, function (err: any, rows: any) {
                    let data = rows[0];
                    let result = {
                        id: data.id,
                        key: data.year + "_be_municipal",
                        type: "be_municipal",
                        type_name: "election_type_be_municipal_name",
                        date: new Date(moment(data.date).format("YYYY-MM-DD")),
                        district_type: "municipality"
                    } as Election;
                    
                    let i18n : { [id: string] : { [id: string] : string; }; } = {};
                    
                    for (let r of rows) {
                        if (i18n.hasOwnProperty(r.i18nLanguage) == false)
                            i18n[r.i18nLanguage] = {};
                        i18n[r.i18nLanguage][result.type_name] = r.i18nTranslation;
                    }
                    
                    result.i18n = i18n;
                    
                    resolve(result);
                }
            )));

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

