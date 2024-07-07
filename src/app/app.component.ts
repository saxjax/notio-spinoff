import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PianoKeysComponent } from './piano-keys/piano-keys.component';
import { MenuComponent } from './menu/menu.component';
import { ScoreComponent } from "./score/score.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PianoKeysComponent, MenuComponent, ScoreComponent]
})
export class AppComponent {
  title = 'notio-spinoff';
}
