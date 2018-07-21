import {inject} from '@loopback/core';
import {juggler, DataSource, AnyObject} from '@loopback/repository';
const config = require('./poldir.datasource.json');

export class PoldirDataSource extends juggler.DataSource {
  static dataSourceName = 'poldir';

  constructor(
    @inject('datasources.config.poldir', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
