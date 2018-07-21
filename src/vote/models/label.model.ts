import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - label
 * label
 */
@model({name: 'label'})
export class Label {
  constructor(data?: Partial<Label>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * A human readable identifier with pattern matching facilities. 
Samples : `2018_be_municipal` for an election, `be_wlx` for a district

   */
  @property({name: 'key'})
  key?: string;

  /**
   * 
   */
  @property({name: 'name'})
  name?: string;

}

