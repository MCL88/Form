import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../shared/candidates.service';
import {Candidate} from "../models/candidate";
import { debug } from 'util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  //Nei providers vanno messi i servizi
  providers: [CandidatesService]
})
export class FormComponent implements OnInit {

  candidates                  :Candidate[];
  candidate                   :Candidate;
  candidate_name              :   string;
  candidate_surname           :   string;
  candidate_age               :   string;
  candidate_email             :   string;
  candidate_telephone         :   string;
  candidate_education         :   number;
  candidate_career            :   number;
  candidate_location          :   number;

  constructor(private candidateService : CandidatesService) {

   }

  ngOnInit() {
    this.candidateService.getCandidates()
    .subscribe(candidates => this.candidates = candidates);
  }

  deleteCandidate(id: any)
  {
    let candidates = this.candidates;
    console.log(id);
    this.candidateService.eliminateCandidate(id)
    .subscribe(data => {
//Se l'elemento del database è stato cancellato
        if(data.n == 1)
        {
//Controllo l'array verifico quale elemento eliminare
          for(var i = 0; i < candidates.length; i++)
          {
            if(candidates[i]._id == id)
            {
              candidates.splice(i,1);
            }
          }
        }
    });
    console.log(candidates);
  }

}
