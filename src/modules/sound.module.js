import { Module } from '../core/module';
import { random } from '../utils';

export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.audioCtx = new (window.AudioContext || window.webkitAudioaudioCtx)();
    this.oscillator = null;
  }

  trigger() {
    if (this.oscillator) {
      this.oscillator.stop();
      this.oscillator.disconnect();
    }
    this.setOscilliator();
    this.play();
  }

  setOscilliator() {
    this.oscillator = this.audioCtx.createOscillator();
    this.oscillator.frequency.setValueAtTime(
      random(200, 700),
      this.audioCtx.currentTime
    );
    const gainNode = this.audioCtx.createGain();
    this.oscillator.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
  }

  play() {
    const currentTime = this.audioCtx.currentTime;
    this.oscillator.start(currentTime);
    this.oscillator.stop(currentTime + 1);
  }
}
