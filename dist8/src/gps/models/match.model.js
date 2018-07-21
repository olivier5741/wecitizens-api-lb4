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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
/**
 * The model class is generated from OpenAPI schema - match
 * Answers match submission
 */
let Match = class Match {
    constructor(data) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }
};
__decorate([
    repository_1.property({ name: 'segment_key' }),
    __metadata("design:type", String)
], Match.prototype, "segment_key", void 0);
__decorate([
    repository_1.property({ name: 'answers' }),
    __metadata("design:type", Array)
], Match.prototype, "answers", void 0);
Match = __decorate([
    repository_1.model({ name: 'match' }),
    __metadata("design:paramtypes", [Object])
], Match);
exports.Match = Match;
//# sourceMappingURL=match.model.js.map