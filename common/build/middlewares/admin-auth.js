"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
var not_authorized_error_1 = require("../errors/not-authorized-error");
var types_1 = require("@aliet/types");
var adminAuth = function (req, res, next) {
    var _a;
    if (((_a = req.currentUser) === null || _a === void 0 ? void 0 : _a.type) !== types_1.UserTypes.Admin) {
        throw new not_authorized_error_1.NotAuthorizedError();
    }
    next();
};
exports.adminAuth = adminAuth;
