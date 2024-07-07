import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoKeyComponent } from "./piano-key/piano-key.component";
import { EnglishToneNames } from './constants/EnglishToneNames';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PianoKeyComponent]
})
export class AppComponent {
  title = 'notio-spinoff';
  pianoKeys = [EnglishToneNames.A, EnglishToneNames.B, EnglishToneNames.C, EnglishToneNames.D, EnglishToneNames.E, EnglishToneNames.F, EnglishToneNames.G,EnglishToneNames.A,]
}
