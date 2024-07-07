import { Component } from '@angular/core';
import { EnglishToneNames } from '../constants/EnglishToneNames';
import { PianoKeyComponent } from "../piano-key/piano-key.component";
import { PianoKeyColor } from '../constants/PianoKeyColor';

@Component({
    selector: 'piano-keys',
    standalone: true,
    templateUrl: './piano-keys.component.html',
    styleUrl: './piano-keys.component.scss',
    imports: [PianoKeyComponent]
})
export class PianoKeysComponent {
  pianoKeys = [EnglishToneNames.A, EnglishToneNames.B, EnglishToneNames.C, EnglishToneNames.D, EnglishToneNames.E, EnglishToneNames.F, EnglishToneNames.G,EnglishToneNames.A,]
  pianoKeyColor = PianoKeyColor;
}
