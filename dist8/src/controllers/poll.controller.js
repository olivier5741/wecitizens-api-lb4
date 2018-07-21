"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any */
const rest_1 = require("@loopback/rest");
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by poll
 *
 */
class PollController {
    constructor() { }
    /**
     * For first app release, set `key` as `{main_election_key}_voter` (sample `2018_be_municipal_voter`). You need to query this to get number of submissions.
     */
    async gpsCampaignGet(key) {
        throw new Error('Not implemented');
    }
    /**
     * For first app release, set the poll `key` as `{main_election_key}_{district_key}_voter` (example `2018_be_municipal_be_6850_voter`)
     */
    async gpsPollGet(key) {
        throw new Error('Not implemented');
    }
}
__decorate([
    rest_1.operation('get', '/gps/campaign/{key}'),
    __param(0, rest_1.param({ name: 'key', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "gpsCampaignGet", null);
__decorate([
    rest_1.operation('get', '/gps/poll/{key}'),
    __param(0, rest_1.param({ name: 'key', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PollController.prototype, "gpsPollGet", null);
exports.PollController = PollController;
//# sourceMappingURL=poll.controller.js.map