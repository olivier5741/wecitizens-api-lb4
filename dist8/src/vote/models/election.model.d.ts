import { Uuidentity } from './uuidentity.model';
import { Label } from './label.model';
import { ElectionDistrict } from './election-district.model';
import { ElectionParty } from './election-party.model';
import { Candidate } from './candidate.model';
import { Translations } from './translations.model';
/**
 * The model type is generated from OpenAPI schema - election
 */
export declare type Election = Uuidentity & Label & {
    type?: 'be_regional' | 'be_municipal' | 'be_provincial';
    type_name?: string;
    date?: Date;
    main_election_key?: string;
    district_type?: string;
    district_key?: string;
    active?: boolean;
    districts?: ElectionDistrict[];
    parties?: ElectionParty[];
    candidates?: Candidate[];
} & Translations;
