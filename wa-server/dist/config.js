"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL_ChatatID = exports.DEFAULT_RECONNECT_INTERVAL = exports.SESSION_DIR = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.APP_PORT || 4000;
exports.SESSION_DIR = "auth_info_bailys";
exports.DEFAULT_RECONNECT_INTERVAL = 5000;
exports.API_URL_ChatatID = process.env.API_URL_CHATATID || "http://localhost:3000";
