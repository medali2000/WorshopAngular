import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Models/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent  {

  //listEmploi:Emploi []=[];

  
  listEmploi=[
    {referance: "AE78" , title: "Ingenieur", entreprise: "actia", etat: true},
    {referance: "NB78" , title: "technicien", entreprise: "esprit", etat: false},
    {referance: "ZE78" , title: "infermier", entreprise: "hopital militaire", etat: true}, ]

  Bilan(E:Emploi){
    
  }

}
