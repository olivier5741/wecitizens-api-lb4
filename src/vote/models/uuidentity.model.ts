import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - uuidentity
 * uuidentity
 */
@model({name: 'uuidentity'})
export class Uuidentity {
  constructor(data?: Partial<Uuidentity>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * A UUID identifier
   */
  @property({name: 'id'})
  id?: string;

}

