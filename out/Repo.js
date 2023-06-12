"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
class Repo {
    constructor(repoResponse) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.html_url;
        this.size = repoResponse.size;
        this.forkCount = repoResponse.forks_count;
    }
}
exports.Repo = Repo;
