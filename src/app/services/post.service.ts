import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Global } from './global';

@Injectable()
export class PostService {

    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.url;
    }

    getPosts():Observable<any>{

        return this._http.get(this.url + "posts");

    }

}