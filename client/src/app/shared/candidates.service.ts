import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//Importo la funzione map
import 'rxjs/add/operator/map';
import {Candidate}    from '../models/candidate';


@Injectable()
export class CandidatesService {

  constructor(private http: Http) { }


  //Ottengo i contatti salvati sul DB
  getCandidates(){
    return this.http.get("http://localhost:3000/api/candidate")
    .map(res => res.json());
  }

  addCandidate(newCandidate){
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      return this.http.post("http://localhost:3000/api/candidate",newCandidate, {headers:headers})
      .map(res =>res.json());
  }

  eliminateCandidate(id){
    return this.http.delete("http://localhost:3000/api/candidate/"+id)
    .map(res =>res.json());
  }

}
