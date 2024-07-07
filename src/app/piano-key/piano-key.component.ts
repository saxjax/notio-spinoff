import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TonePlayerService } from '../services/tone-player/tone-player.service';
import { EnglishToneNames } from '../constants/EnglishToneNames';
import { PianoKeyColor } from '../constants/PianoKeyColor';
import { NgClass } from '@angular/common';

@Component({
  selector: 'piano-key',
  template:`<button type="button" (click)="keyClicked()">{{toneName()}}</button>`,
  standalone: true,
  imports: [NgClass],
  templateUrl: './piano-key.component.html',
  styleUrl: './piano-key.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PianoKeyComponent {
  toneName = input.required<EnglishToneNames>();
  color = input.required<PianoKeyColor>()
  tonePlayer = inject(TonePlayerService)
  pianoKeyColor = PianoKeyColor;

keyClicked() {
  this.tonePlayer.play(this.toneName())
}

}
