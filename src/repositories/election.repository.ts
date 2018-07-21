import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {inject} from '@loopback/core';
import {ElectionDb} from "./electionDb";

export class ElectionRepository extends DefaultCrudRepository<
    ElectionDb,
    typeof ElectionDb.prototype.id
    > {
    constructor(
        @inject('datasources.poldir') protected datasource: juggler.DataSource,
    ) {
        super(ElectionDb, datasource);
    }
}

