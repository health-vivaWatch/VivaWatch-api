export class DomainEvent {
  private readonly id: string;
  private readonly name: string;
  private readonly aggregateId: string;
  private readonly aggregateName: string;
  private readonly occurredAt: Date;

  constructor(
    id: string,
    name: string,
    aggregateId: string,
    aggregateName: string,
  ) {
    this.id = id;
    this.name = name;
    this.aggregateId = aggregateId;
    this.aggregateName = aggregateName;
    this.occurredAt = new Date();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAggregateId(): string {
    return this.aggregateId;
  }

  getAggregateName(): string {
    return this.aggregateName;
  }

  getOcurredAt(): Date {
    return this.occurredAt;
  }
}
