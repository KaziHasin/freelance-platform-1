"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = exports.PackageCode = exports.VerificationStatus = exports.AssignmentStatus = exports.DevLevel = exports.Role = void 0;
var Role;
(function (Role) {
    Role["CLIENT"] = "CLIENT";
    Role["DEVELOPER"] = "DEVELOPER";
    Role["ADMIN"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
var DevLevel;
(function (DevLevel) {
    DevLevel["EXPERT"] = "EXPERT";
    DevLevel["MID"] = "MID";
    DevLevel["FRESHER"] = "FRESHER";
})(DevLevel || (exports.DevLevel = DevLevel = {}));
var AssignmentStatus;
(function (AssignmentStatus) {
    AssignmentStatus["PENDING"] = "PENDING";
    AssignmentStatus["ACCEPTED"] = "ACCEPTED";
    AssignmentStatus["REJECTED"] = "REJECTED";
    AssignmentStatus["EXPIRED"] = "EXPIRED";
})(AssignmentStatus || (exports.AssignmentStatus = AssignmentStatus = {}));
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["PENDING"] = "PENDING";
    VerificationStatus["APPROVED"] = "APPROVED";
    VerificationStatus["REJECTED"] = "REJECTED";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
;
var PackageCode;
(function (PackageCode) {
    PackageCode["FREE"] = "FREE";
    PackageCode["BASIC"] = "BASIC";
    PackageCode["STANDARD"] = "STANDARD";
    PackageCode["PREMIUM"] = "PREMIUM";
})(PackageCode || (exports.PackageCode = PackageCode = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["ACTIVE"] = "ACTIVE";
    SubscriptionStatus["CANCELED"] = "CANCELED";
    SubscriptionStatus["EXPIRED"] = "EXPIRED";
    SubscriptionStatus["PENDING"] = "PENDING";
    SubscriptionStatus["SCHEDULED"] = "SCHEDULED";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
//# sourceMappingURL=enums.js.map