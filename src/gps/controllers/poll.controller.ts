/* tslint:disable:no-any */
import {operation, param} from '@loopback/rest';
import {PollCampaign} from '../models/poll-campaign.model';
import {Poll} from '../models/poll.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by poll
 * 
 */
export class PollController {
  constructor() {}

  /**
   * For first app release, set `key` as `{main_election_key}_voter` (sample `2018_be_municipal_voter`). You need to query this to get number of submissions.
   */
  @operation('get', '/gps/campaign/{key}')
  async gpsCampaignGet(@param({name: 'key', in: 'path'}) key: string): Promise<PollCampaign> {
    throw new Error('Not implemented');
  }

  /**
   * For first app release, set the poll `key` as `{main_election_key}_{district_key}_voter` (example `2018_be_municipal_be_6850_voter`)
   */
  @operation('get', '/gps/poll/{key}')
  async gpsPollGet(@param({name: 'key', in: 'path'}) key: string): Promise<Poll> {
    throw new Error('Not implemented');
  }

}

