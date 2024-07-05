import { Injectable } from '@angular/core';
import { EnglishToneNames } from '../../constants/EnglishToneNames';

@Injectable({
  providedIn: 'root'
})
export class TonePlayerService {

  constructor() { }

  play(tone:EnglishToneNames){
    console.log(tone)
  }
}
