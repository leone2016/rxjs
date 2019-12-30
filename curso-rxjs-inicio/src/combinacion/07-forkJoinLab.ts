import {forkJoin, of} from "rxjs";
import {ajax} from "rxjs/ajax";
import {catchError} from "rxjs/operators";


const githubApiUrl = 'https://api.github.com/users';
const github_user = 'klerith';

forkJoin({
        usuario: ajax.getJSON( `${githubApiUrl}/${github_user}`),
        repos: ajax.getJSON( `${githubApiUrl}/${github_user}/repos23`),
        gist: ajax.getJSON( `${githubApiUrl}/${github_user}/gists`)
    }
)
    .pipe(catchError( err => of(err.message)))
    .subscribe( console.log)
