import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - translations
 * translations
 */
@model({name: 'translations'})
export class Translations {
    constructor(data?: Partial<Translations>) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }

    /**
     * Scoped translations
     */
    @property({name: 'i18n'})
    i18n?: {}
}

