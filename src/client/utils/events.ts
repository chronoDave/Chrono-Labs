export interface EventListener {
  fn: (data: unknown, event: string) => void
}

export class EventEmitter {
  events: { [key: string]: EventListener[] } = {};

  emit(event: string, data: unknown) {
    this.events[event]?.forEach(listener => {
      listener.fn(data, event);
    });
  }

  on(event: string, fn: (...args: unknown[]) => void) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push({ fn });
  }
}
