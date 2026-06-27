import { PlanBenefitEntity } from './plan-benefit.entity';

export class PlanAggregate {
  private id: string;
  private name: string;
  private price: string;
  private period: string;
  private isSelfService: boolean;
  private isEnterprise: boolean;
  private isMain: boolean;
  private isActive: boolean;
  private createdAt: boolean;
  private updatedAt: boolean;
  private planBenefits: PlanBenefitEntity[];

  addBenefit() {
    // adiciona benefício
    // adiciona evento
    // emite evento no final de tudo
  }
}
