"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var dotenv = require("dotenv");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dotenv.config();
                    // await kanbanStatus('Open', 'Not yet started');
                    // await kanbanStatus('InProgress', 'In progress of analysis and completion');
                    // await kanbanStatus('InReview', 'Completed and needs confirmation');
                    // await kanbanStatus('Completed', 'Comfirmed completed');
                    // await kanbanPriority('Critical','Highest criticality');
                    // await kanbanPriority('High','High criticality');
                    // await kanbanPriority('Medium','Medium criticality');
                    // await kanbanPriority('Low','Low criticality');
                    // await kanbanType('Amend','Amend an existing documenation');
                    // await kanbanType('Add','Add a documenation');
                    // await kanbanType('Delete','Delete a documenation');
                    // await kanbanType('Modify','Modify a documenation');
                    // await kanbanType('Initial','Initial ');
                    return [4 /*yield*/, kanbanSeed('HK-1', 'Company', 'SWIFT BIC', 'High', 'Open', 'Config', 'Setup company BIC Code')];
                case 1:
                    // await kanbanStatus('Open', 'Not yet started');
                    // await kanbanStatus('InProgress', 'In progress of analysis and completion');
                    // await kanbanStatus('InReview', 'Completed and needs confirmation');
                    // await kanbanStatus('Completed', 'Comfirmed completed');
                    // await kanbanPriority('Critical','Highest criticality');
                    // await kanbanPriority('High','High criticality');
                    // await kanbanPriority('Medium','Medium criticality');
                    // await kanbanPriority('Low','Low criticality');
                    // await kanbanType('Amend','Amend an existing documenation');
                    // await kanbanType('Add','Add a documenation');
                    // await kanbanType('Delete','Delete a documenation');
                    // await kanbanType('Modify','Modify a documenation');
                    // await kanbanType('Initial','Initial ');
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-2', 'Company', 'CCASS Participant ID', 'High', 'Open', 'Config', 'Setup Participant ID')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-3', 'Company', 'Broker ID', 'High', 'Open', 'Config', 'Setup Broker ID')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-4', 'Company', 'Trading Ledger', 'High', 'Open', 'Config', 'Setup company BIC Code')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-5', 'SSI', 'CCASS Stock Clearing Acct', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-6', 'SSI', 'Client/Broker Accts', 'High', 'Open', 'Initial', 'Setup Client/Broker Accounts')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-7', 'User Templates', 'Tm', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-8', 'Calendars', 'Calendar Setup', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-9', 'Book', 'Trading and Agency', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-10', 'Market', 'Shanghai-Hong Kong Stock ', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-11', 'Market', 'Shanghai-Hong Kong Stock ', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-12', 'Market', 'Connect Shenzhen-HongKong Stock ', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-13', 'Market', 'Connect New York Market', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-14', 'Fees & Charges', 'Market fees for Client', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-15', 'Fees & Charges', 'Market fees', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-16', 'Trade Types', 'Principal, Broker Single Sided, Client Single Sided, Margin Broker, Margin Client, Client Stock/Cash Free', 'High', 'Open', 'Initial', 'Setup company BIC Code')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-17', 'Trade Verification', 'Trade Verification', 'High', 'Open', 'Initial', 'Trade Verification')];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-18', 'Margin Parameters', 'Haircut rates', 'High', 'Open', 'Initial', 'Haircut rates')];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-19', 'Client Statements', 'Company Logo, Address and Disclaimer', 'High', 'Open', 'Initial', 'Company Logo, Address and Disclaimer')];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-20', 'Accounts Postings Rules', 'Account codes', 'High', 'Open', 'Initial', 'Account codes')];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-21', 'Client Interest', 'Set up interest rate groupings and assign group to each counterparty if applicable', 'High', 'Open', 'Initial', 'Set up interest rate groupings and assign group to each counterparty if applicable')];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-22', 'Scheduled Jobs', 'Margin Calculation', 'High', 'Open', 'Initial', 'Margin Calculation')];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-23', 'Purging', '6 months', 'High', 'Open', 'Initial', '6 months')];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-24', 'Scheduled Jobs', 'Safe Custody Fee', 'High', 'Open', 'Initial', 'Safe Custody Fee')];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-25', 'Market', 'Connect Shenzhen-HongKong Stock ', 'High', 'Open', 'Initial', 'Connect Shenzhen-HongKong Stock ')];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-26', 'Market', 'Connect New York Market', 'High', 'Open', 'Initial', 'Connect New York Market')];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-27', 'Fees & Charges', 'Market fees for Client', 'High', 'Open', 'Initial', 'Market fees for Client')];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-28', 'Fees & Charges', 'Market fees', 'High', 'Open', 'Initial', 'Market fees')];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-29', 'Trade Types', 'Principal, Broker Single Sided, Client Single Sided, Margin Broker, Margin Client, Client Stock/Cash Free', 'High', 'Open', 'Initial', 'Principal, Broker Single Sided, Client Single Sided, Margin Broker, Margin Client, Client Stock/Cash Free')];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-30', 'Trade Verification', 'Trader Verification', 'High', 'Open', 'Initial', 'Trader Verification')];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-31', 'Margin Parameters', 'Haircut rates', 'High', 'Open', 'Initial', 'Haircut rates')];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-32', 'Client Statements', 'Company Logo, Address and Disclaimer', 'High', 'Open', 'Initial', 'Company Logo, Address and Disclaimer')];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-33', 'Accounts Postings Rules', 'Account codes', 'High', 'Open', 'Initial', 'Account codes')];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-34', 'Client Interest', 'Set up interest rate groupings and assign group to each counterparty if applicable', 'High', 'Open', 'Initial', 'Set up interest rate groupings and assign group to each counterparty if applicable')];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-35', 'Scheduled Jobs', 'Margin Calculation', 'High', 'Open', 'Initial', 'Margin Calculation')];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-36', 'Purging', '6 months', 'High', 'Open', 'Initial', '6 months')];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, kanbanSeed('HK-37', 'Scheduled Jobs', 'Safe Custody Fee', 'High', 'Open', 'Initial', 'Safe Custody Fee')];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function kanbanSeed(task_id, classname, title, priority, status, type, summary) {
    return __awaiter(this, void 0, void 0, function () {
        var kanban;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Running create task: " + task_id);
                    dotenv.config();
                    return [4 /*yield*/, prisma.kb_task.create({
                            data: {
                                assignee: '@ashley',
                                classname: classname,
                                description: summary,
                                color: '#5B8B4F',
                                estimate: 1,
                                party_ref: 'HKTC',
                                priority: priority,
                                rankid: 1,
                                status: status,
                                summary: summary,
                                tags: '#initialize',
                                task_id: task_id,
                                title: title,
                                type: type
                            }
                        })];
                case 1:
                    kanban = _a.sent();
                    return [2 /*return*/, kanban];
            }
        });
    });
}
function kanbanPriority(priority, desc) {
    return __awaiter(this, void 0, void 0, function () {
        var today, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    today = new Date();
                    console.log("Running create task " + today);
                    return [4 /*yield*/, prisma.kb_priority.create({
                            data: {
                                description: desc,
                                priority: priority,
                                updatedte: today.toISOString(),
                                updateusr: 'ADMIN'
                            }
                        })];
                case 1:
                    status = _a.sent();
                    if (status) {
                        console.log("Task priority created");
                    }
                    return [2 /*return*/, status];
            }
        });
    });
}
function kanbanType(type, desc) {
    return __awaiter(this, void 0, void 0, function () {
        var status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Running adding a type " + type);
                    return [4 /*yield*/, prisma.kb_type.create({
                            data: {
                                type: type,
                                description: desc,
                                updatedte: '2021-09-02T08:44:38.079Z',
                                updateusr: 'ADMIN'
                            }
                        })];
                case 1:
                    status = _a.sent();
                    if (status) {
                        console.log("Task priority created");
                    }
                    return [2 /*return*/, status];
            }
        });
    });
}
function kanbanStatus(status, desc) {
    return __awaiter(this, void 0, void 0, function () {
        var rc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Running adding a status " + status);
                    return [4 /*yield*/, prisma.kb_status.create({
                            data: {
                                status: status,
                                description: desc,
                                updatedte: '2021-09-02T08:44:38.079Z',
                                updateusr: 'ADMIN'
                            }
                        })];
                case 1:
                    rc = _a.sent();
                    if (status) {
                        console.log("Task priority created");
                    }
                    return [2 /*return*/, rc];
            }
        });
    });
}
main()["catch"](function (e) { return console.error(e); })["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
