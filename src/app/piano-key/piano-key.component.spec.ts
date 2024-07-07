import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PianoKeyComponent } from './piano-key.component';
import { TonePlayerService } from '../services/tone-player/tone-player.service';
import { Component } from '@angular/core';
import { EnglishToneNames } from '../constants/EnglishToneNames';
import { By } from '@angular/platform-browser';

// Create WrapperComponent
@Component({
  template: `
    <piano-key [toneName]="pianoKey"></piano-key>
    <p data-testid="txt-keyname">{{ pianoKey }}</p>
  `,
  standalone: true,
  imports: [PianoKeyComponent],
})
class WrapperComponentPianoKey {
  pianoKey = EnglishToneNames.A;
}
// End create WrapperComponent

describe('PianoKeyComponent', () => {
  let component: WrapperComponentPianoKey;
  let fixture: ComponentFixture<WrapperComponentPianoKey>;

  const tonePlayerServiceMock = {
    play: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[WrapperComponentPianoKey],
      providers: [{ provide: TonePlayerService, useValue: tonePlayerServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponentPianoKey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have key with value A', () => {
    const keynameElement: HTMLParagraphElement = fixture.debugElement.query(
      By.css('[data-testid=txt-keyname]')
    ).nativeElement;
    expect(keynameElement.textContent).toBe(EnglishToneNames.A.toString());
  });

  it('should call the tonePlayer service when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(tonePlayerServiceMock.play).toHaveBeenCalledWith(EnglishToneNames.A);
  });
});
