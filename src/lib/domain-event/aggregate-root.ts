import { DomainEvent } from './domain-event';

export abstract class AggregateRoot {
  protected _events: DomainEvent[] = [];

  protected pushEvent(domainEvent: DomainEvent): void {
    this._events.push(domainEvent);
  }

  protected clearEvents(): void {
    this._events = [];
  }

  protected getEvents(): DomainEvent[] {
    const events: DomainEvent[] = [...this._events];
    this.clearEvents();
    return events;
  }
}
