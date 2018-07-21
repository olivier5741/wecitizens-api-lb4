import {Entity, model, property, hasMany} from "@loopback/repository";

@model({name: "election_texts"})
export class ElectionTextsDb extends Entity {
    @property({id: true})
    id_election: number;

    @property({id: true})
    id_lang: string;

    @property()
    name: string;
}

@model({name: "election"})
export class ElectionDb extends Entity {
    @property({id: true})
    id: number;

    @property()
    id_parent: number;

    @property()
    year: string;

    @property()
    date: string;

    @hasMany(ElectionTextsDb) texts: ElectionTextsDb[];
}