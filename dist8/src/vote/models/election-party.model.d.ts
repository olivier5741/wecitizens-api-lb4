import { Label } from '../../models/label.model';
import { ElectionPartyCandidate } from './election-party-candidate.model';
/**
 * The model type is generated from OpenAPI schema - election_party
 */
export declare type ElectionParty = Label & {
    candidates?: ElectionPartyCandidate[];
};
