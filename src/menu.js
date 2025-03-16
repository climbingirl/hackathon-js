import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module.js';
export class ContextMenu extends Menu {
  menuItems = {
    clicks: new ClicksModule('clicks', 'Считать клики (за 3 секундф)'),
    shape: new ShapeModule('shape', 'Создать фигуру'),
    background: new BackgroundModule('background', 'Поменять цвет'),
    timer: new TimerModule('timer', 'Таймер отсчета'),
  };

  constructor(element) {
    super(element);
    Object.values(this.menuItems).forEach((item) => this.add(item));
    document.body.addEventListener('contextmenu', this.open.bind(this));
    this.el.addEventListener('click', (event) => {
      const type = event.target.dataset.type;
      this.menuItems[type].trigger();
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
