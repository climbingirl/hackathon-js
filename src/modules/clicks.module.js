import { Module } from '../core/module';
export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.durationSec = 3;
    this.clickCount = 0;
  }

  trigger() {
    this.start();
  }

  start() {
    setTimeout(() => {
      this.stop();
    }, this.durationSec * 1000);
    document.body.addEventListener('click', this.handleclick);
  }

  stop() {
    document.removeEventListener('click', this.handleclick);
    alert(`Total clicks: ${--this.clickCount}`);
    this.clickCount = 0;
  }

  handleclick = () => {
    this.clickCount++;
  };
}
