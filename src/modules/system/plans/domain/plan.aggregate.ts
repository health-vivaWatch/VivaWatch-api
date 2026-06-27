import { AggregateRoot } from '../../../../lib/domain-event/aggregate-root';
import { PlanBenefitEntity } from './plan-benefit.entity';

interface PlanProps {
  id: string;
  name: string;
  price: number;
  period: string;
  isSelfService: boolean;
  isEnterprise: boolean;
  isMain: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class PlanAggregate extends AggregateRoot {
  private planBenefits: PlanBenefitEntity[] = [];

  private constructor(private readonly props: PlanProps) {
    super();
  }

  addBenefit(planBenefit: PlanBenefitEntity) {
    // adiciona benefício
    // adiciona evento
    // emite evento no final de tudo
    this.planBenefits.push(planBenefit);
  }

  static create() {}

  disable() {
    this.props.isActive = false;
    // eevent emit
  }

  enable() {
    this.props.isActive = true;
    // event emit
  }

  changePrice(newPrice: number) {
    // validations goes here
    this.props.price = newPrice;
    // emit event
  }

  turnMain() {}
}
