import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {inject} from '@loopback/core';

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

import {Entity, model, property} from '@loopback/repository';

@model({name: "election"})
export class ElectionDb extends Entity {
    @property({id: true})
    id: number;

    @property({required: false})
    year: string;
}