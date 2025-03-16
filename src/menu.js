import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { MessageModule } from './modules/message.module.js';
import { SoundModule } from './modules/sound.module.js';
import { TimerModule } from './modules/timer.module.js';
export class ContextMenu extends Menu {
  menuItems = {
    clicks: new ClicksModule('clicks', 'Считать клики (за 3 секундф)'),
    background: new BackgroundModule('background', 'Поменять цвет'),
    timer: new TimerModule('timer', 'Таймер отсчета'),
    message: new MessageModule('message', 'Вызвать сообщение'),
    sound: new SoundModule('sound', 'Вызвать звук'),
  };

  constructor(element) {
    super(element);
    Object.values(this.menuItems).forEach((item) => this.add(item));
    document.body.addEventListener('contextmenu', this.open.bind(this));
    this.el.addEventListener('click', (event) => {
      const type = event.target.dataset.type;
      this.menuItems?.[type].trigger();
      this.close();
    });
  }

  open(event) {
    event.preventDefault();
    this.el.style.top = `${event.offsetY}px`;
    this.el.style.left = `${event.offsetX}px`;
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(menuItem) {
    this.el.innerHTML += menuItem.toHTML();
  }
}
