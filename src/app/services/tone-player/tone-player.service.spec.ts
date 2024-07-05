import { TestBed } from '@angular/core/testing';
import { TonePlayerService } from './tone-player.service';


describe('TonePlayerService', () => {
  let service: TonePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TonePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
