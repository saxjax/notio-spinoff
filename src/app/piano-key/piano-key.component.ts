import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TonePlayerService } from '../services/tone-player/tone-player.service';
import { EnglishToneNames } from '../constants/EnglishToneNames';

@Component({
  selector: 'piano-key',
  template:`<button type="button" (click)="keyClicked()">{{toneName()}}</button>`,
  standalone: true,
  imports: [],
  templateUrl: './piano-key.component.html',
  styleUrl: './piano-key.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PianoKeyComponent {
  toneName = input.required<EnglishToneNames>()
  tonePlayer = inject(TonePlayerService)

keyClicked() {
  this.tonePlayer.play(this.toneName())
}

}
