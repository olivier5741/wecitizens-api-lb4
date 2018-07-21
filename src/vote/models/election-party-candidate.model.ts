import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - election_party_candidate
 * An election party member
 */
@model({name: 'election_party_candidate'})
export class ElectionPartyCandidate {
  constructor(data?: Partial<ElectionPartyCandidate>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'order'})
  order?: number;

  /**
   * 
   */
  @property({name: 'key'})
  key?: string;

}

