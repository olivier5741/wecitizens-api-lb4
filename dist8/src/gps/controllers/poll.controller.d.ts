import { PollCampaign } from '../models/poll-campaign.model';
import { Poll } from '../models/poll.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by poll
 *
 */
export declare class PollController {
    constructor();
    /**
     * For first app release, set `key` as `{main_election_key}_voter` (sample `2018_be_municipal_voter`). You need to query this to get number of submissions.
     */
    gpsCampaignGet(key: string): Promise<PollCampaign>;
    /**
     * For first app release, set the poll `key` as `{main_election_key}_{district_key}_voter` (example `2018_be_municipal_be_6850_voter`)
     */
    gpsPollGet(key: string): Promise<Poll>;
}
