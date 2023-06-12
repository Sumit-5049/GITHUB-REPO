"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const lodash_1 = __importDefault(require("lodash"));
let svc = new GithubApiService_1.GithubApiService();
// Sumit-5049
if (process.argv.length < 3)
    console.log("please enter username od github as command line arg");
else {
    let username = process.argv[2];
    svc.getUserInfo(username, (user) => {
        svc.getRepos(username, (repos) => {
            let sorttedRepo = lodash_1.default.sortBy(repos, [(repo) => repo.forkCount * -1]);
            user.repos = lodash_1.default.take(sorttedRepo, 5);
            console.log(user);
        });
    });
}
