import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.messages = [
      'Ты способен на большее, чем можешь себе представить!',
      'Каждый день — это новая возможность стать лучше.',
      'Помни, что каждый маленький успех ведет к большим достижениям.',
      'Не бойся ошибок — они являются важной частью пути к успеху.',
      'Вдохновляйся своим прогрессом и не забывай, что каждый день — это шанс стать еще лучше!',
      'Ты уже сделал множество шагов к своей мечте, просто продолжай идти вперед!',
    ];
  }

  trigger() {
    const messageBlock = document.createElement('h3');
    messageBlock.textContent = this.messages[random(0, this.messages.length)];
    document.body.appendChild(messageBlock);
    setTimeout(() => {
      document.body.removeChild(messageBlock);
    }, 5000);
  }
}
