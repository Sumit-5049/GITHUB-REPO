import { GithubApiService } from "./GithubApiService";
import _ from 'lodash';
import { Repo } from "./Repo";
import { User } from "./User";

let svc=new GithubApiService();

// Sumit-5049

if(process.argv.length<3)
    console.log("please enter username od github as command line arg");
else{
    let username=process.argv[2];
    svc.getUserInfo(username,(user:User)=>{
        svc.getRepos(username,(repos:Repo[])=>{
            let sorttedRepo=_.sortBy(repos,[(repo:Repo)=>repo.forkCount*-1]);
            user.repos=_.take(sorttedRepo,5);
            console.log(user);
        })
        
    });
}