```src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
│
├── lib/
│   ├── base-operation/
│   │   ├── base-operation.ts
│   │   ├── operation-response.ts
│   │   └── service-locator.ts
│   │
│   ├── domain-events/                    🆕 Event-Driven Infrastructure
│   │   ├── domain-event.base.ts
│   │   ├── domain-event.interface.ts
│   │   ├── event-bus.ts
│   │   ├── event-handler.interface.ts
│   │   └── event-handler.registry.ts
│   │
│   └── either/
│       ├── either.ts
│       ├── either.spec.ts
│       └── index.ts
│
├── modules/
│   │
│   ├── business/                         🏢 CONTEXTO: Negócio da Empresa
│   │   ├── business.module.ts
│   │   ├── decorators/
│   │   │   └── application-controller.decorator.ts
│   │   │
│   │   ├── company/                      📦 Agregado: Company
│   │   │   ├── company.module.ts
│   │   │   ├── company.controller.ts
│   │   │   ├── company.service.ts
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── company.aggregate.ts        # AggregateRoot
│   │   │   │   ├── company.entity.ts           # Entity (synonym em DDD)
│   │   │   │   ├── company.events.ts           # DomainEvents próprios
│   │   │   │   └── company.specifications.ts   # Query specifications
│   │   │   │
│   │   │   ├── value-objects/
│   │   │   │   ├── company-slug.vo.ts
│   │   │   │   ├── company-status.vo.ts        # ACTIVE, INACTIVE, SUSPENDED
│   │   │   │   └── company-metadata.vo.ts
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── create-company.use-case.ts  # Command handler
│   │   │   │   ├── update-company.use-case.ts
│   │   │   │   ├── activate-company.use-case.ts
│   │   │   │   └── deactivate-company.use-case.ts
│   │   │   │
│   │   │   ├── adapters/
│   │   │   │   ├── company.repository.ts       # Persistence interface
│   │   │   │   ├── company.prisma-repository.ts # Prisma impl
│   │   │   │   └── company.dto.ts
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── company-already-exists.error.ts
│   │   │       ├── company-not-found.error.ts
│   │   │       └── invalid-slug.error.ts
│   │   │
│   │   ├── user/                         📦 Agregado: User
│   │   │   ├── user.module.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── user.aggregate.ts
│   │   │   │   ├── user.events.ts
│   │   │   │   └── user.specifications.ts
│   │   │   │
│   │   │   ├── value-objects/
│   │   │   │   ├── user-role.vo.ts             # SYSTEM_ADMIN, COMPANY_ADMIN, etc
│   │   │   │   ├── user-email.vo.ts
│   │   │   │   └── user-status.vo.ts           # ACTIVE, INACTIVE
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── create-user.use-case.ts
│   │   │   │   ├── update-user-role.use-case.ts
│   │   │   │   ├── deactivate-user.use-case.ts
│   │   │   │   └── find-users-by-company.use-case.ts
│   │   │   │
│   │   │   ├── adapters/
│   │   │   │   ├── user.repository.ts
│   │   │   │   ├── user.prisma-repository.ts
│   │   │   │   └── user.dto.ts
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── user-already-exists.error.ts
│   │   │       ├── user-not-found.error.ts
│   │   │       └── invalid-email.error.ts
│   │   │
│   │   ├── elderly/                      📦 Agregado: Elderly
│   │   │   ├── elderly.module.ts
│   │   │   ├── elderly.controller.ts
│   │   │   ├── elderly.service.ts
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── elderly.aggregate.ts
│   │   │   │   ├── elderly.events.ts          # ElderlyCareRegistered, etc
│   │   │   │   └── elderly.specifications.ts  # FindElderliesByCompany, etc
│   │   │   │
│   │   │   ├── value-objects/
│   │   │   │   ├── personal-info.vo.ts        # name, birthDate, document
│   │   │   │   ├── health-condition.vo.ts     # chronicDiseases, medications
│   │   │   │   └── elderly-status.vo.ts
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── register-elderly.use-case.ts
│   │   │   │   ├── update-elderly.use-case.ts
│   │   │   │   ├── assign-caregiver.use-case.ts
│   │   │   │   └── get-elderly-profile.use-case.ts
│   │   │   │
│   │   │   ├── adapters/
│   │   │   │   ├── elderly.repository.ts
│   │   │   │   ├── elderly.prisma-repository.ts
│   │   │   │   └── elderly.dto.ts
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── elderly-not-found.error.ts
│   │   │       ├── elderly-already-has-device.error.ts
│   │   │       └── invalid-health-condition.error.ts
│   │   │
│   │   └── device/                       📦 Agregado: Device
│   │       ├── device.module.ts
│   │       ├── device.controller.ts
│   │       ├── device.service.ts
│   │       │
│   │       ├── domain/
│   │       │   ├── device.aggregate.ts
│   │       │   ├── device.events.ts            # DevicePaired, DeviceDisconnected, etc
│   │       │   └── device.specifications.ts    # DevicesByCompany, DevicesByElderly, etc
│   │       │
│   │       ├── value-objects/
│   │       │   ├── device-spec.vo.ts          # model, brand, serialNumber
│   │       │   ├── device-status.vo.ts        # ACTIVE, INACTIVE, DISCONNECTED, MAINTENANCE
│   │       │   └── device-sync.vo.ts
│   │       │
│   │       ├── application/
│   │       │   ├── register-device.use-case.ts
│   │       │   ├── pair-device-to-elderly.use-case.ts
│   │       │   ├── mark-device-inactive.use-case.ts
│   │       │   └── sync-device.use-case.ts
│   │       │
│   │       ├── adapters/
│   │       │   ├── device.repository.ts
│   │       │   ├── device.prisma-repository.ts
│   │       │   └── device.dto.ts
│   │       │
│   │       └── errors/
│   │           ├── device-not-found.error.ts
│   │           ├── device-already-paired.error.ts
│   │           ├── invalid-serial-number.error.ts
│   │           └── device-not-synced.error.ts
│   │
│   ├── system/                           🔧 CONTEXTO: Gerenciamento Global
│   │   ├── system.module.ts
│   │   │
│   │   ├── plan/                         📦 Agregado: Plan
│   │   │   ├── plan.module.ts
│   │   │   ├── plan.controller.ts
│   │   │   ├── plan.service.ts
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── plan.aggregate.ts
│   │   │   │   ├── plan-benefit.entity.ts
│   │   │   │   ├── plan.events.ts
│   │   │   │   └── plan.specifications.ts
│   │   │   │
│   │   │   ├── value-objects/
│   │   │   │   ├── price.vo.ts                # amount, currency; methods: isGreaterThan
│   │   │   │   ├── billing-period.vo.ts       # DAILY, WEEKLY, MONTHLY, YEARLY
│   │   │   │   └── plan-status.vo.ts
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── create-plan.use-case.ts
│   │   │   │   ├── update-plan.use-case.ts
│   │   │   │   ├── add-benefit.use-case.ts
│   │   │   │   └── deactivate-plan.use-case.ts
│   │   │   │
│   │   │   ├── adapters/
│   │   │   │   ├── plan.repository.ts
│   │   │   │   ├── plan.prisma-repository.ts
│   │   │   │   └── plan.dto.ts
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── plan-not-found.error.ts
│   │   │       ├── duplicate-plan-name.error.ts
│   │   │       └── invalid-price.error.ts
│   │   │
│   │   └── subscription/                 📦 Agregado: Subscription
│   │       ├── subscription.module.ts
│   │       ├── subscription.controller.ts
│   │       ├── subscription.service.ts
│   │       │
│   │       ├── domain/
│   │       │   ├── subscription.aggregate.ts
│   │       │   ├── subscription-payment.entity.ts
│   │       │   ├── subscription.events.ts     # SubscriptionCreated, SubscriptionRenewed, etc
│   │       │   └── subscription.specifications.ts # ActiveSubscriptionByCompany, etc
│   │       │
│   │       ├── value-objects/
│   │       │   ├── subscription-status.vo.ts  # ACTIVE, TRIALING, PAST_DUE, CANCELED, etc
│   │       │   ├── payment-reference.vo.ts    # externalId, status, failureReason
│   │       │   ├── billing-cycle.vo.ts        # startAt, endAt, renewAt
│   │       │   └── payment-status.vo.ts
│   │       │
│   │       ├── application/
│   │       │   ├── create-subscription.use-case.ts
│   │       │   ├── renew-subscription.use-case.ts
│   │       │   ├── cancel-subscription.use-case.ts
│   │       │   ├── process-payment.use-case.ts
│   │       │   └── handle-payment-failure.use-case.ts
│   │       │
│   │       ├── domain-services/
│   │       │   ├── subscription-renewal.saga.ts  # Orchestração: retry, notifica, etc
│   │       │   └── payment-processor.domain-service.ts
│   │       │
│   │       ├── adapters/
│   │       │   ├── subscription.repository.ts
│   │       │   ├── subscription.prisma-repository.ts
│   │       │   └── subscription.dto.ts
│   │       │
│   │       └── errors/
│   │           ├── subscription-not-found.error.ts
│   │           ├── no-active-subscription.error.ts
│   │           ├── payment-failed.error.ts
│   │           └── subscription-already-canceled.error.ts
│   │
│   ├── iam/                              🔐 CONTEXTO: Identidade e Acesso
│   │   ├── iam.module.ts
│   │   │
│   │   ├── auth/                         🆕 Autenticação
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   │
│   │   │   ├── dto/
│   │   │   │   ├── login.dto.ts
│   │   │   │   ├── register.dto.ts
│   │   │   │   └── refresh-token.dto.ts
│   │   │   │
│   │   │   ├── strategies/
│   │   │   │   ├── jwt.strategy.ts
│   │   │   │   ├── local.strategy.ts
│   │   │   │   └── refresh.strategy.ts
│   │   │   │
│   │   │   ├── guards/
│   │   │   │   ├── jwt.guard.ts
│   │   │   │   ├── local.guard.ts
│   │   │   │   └── refresh.guard.ts
│   │   │   │
│   │   │   ├── decorators/
│   │   │   │   ├── current-user.decorator.ts
│   │   │   │   └── public.decorator.ts
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── invalid-credentials.error.ts
│   │   │       ├── token-expired.error.ts
│   │   │       └── user-inactive.error.ts
│   │   │
│   │   └── authorization/                🆕 Autorização & RBAC
│   │       ├── rbac.service.ts
│   │       ├── permissions.ts
│   │       ├── roles.enum.ts
│   │       │
│   │       ├── guards/
│   │       │   ├── role.guard.ts            # @HasRole('COMPANY_ADMIN')
│   │       │   ├── permission.guard.ts      # @HasPermission('manage:users')
│   │       │   └── company-access.guard.ts  # Apenas sua company
│   │       │
│   │       ├── decorators/
│   │       │   ├── has-role.decorator.ts
│   │       │   ├── has-permission.decorator.ts
│   │       │   └── company-id.decorator.ts
│   │       │
│   │       └── errors/
│   │           ├── insufficient-permissions.error.ts
│   │           ├── company-access-denied.error.ts
│   │           └── role-not-allowed.error.ts
│   │
│   ├── monitoring/                       📊 CONTEXTO: Monitoramento de Saúde
│   │   ├── monitoring.module.ts
│   │   │
│   │   ├── measurement/                  📦 Agregado: Measurement (Time-series)
│   │   │   ├── measurement.module.ts
│   │   │   ├── measurement.controller.ts
│   │   │   ├── measurement.service.ts
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── measurement.aggregate.ts
│   │   │   │   ├── measurement.events.ts      # MeasurementRecorded, MeasurementCritical
│   │   │   │   └── measurement.specifications.ts # RecentMeasurements, CriticalMeasurements
│   │   │   │
│   │   │   ├── value-objects/
│   │   │   │   ├── health-metrics.vo.ts       # bpm, spo2, temperature
│   │   │   │   ├── measurement-timestamp.vo.ts
│   │   │   │   └── measurement-status.vo.ts  # RECORDED, VALIDATED, ANOMALY
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── record-measurement.use-case.ts
│   │   │   │   ├── get-recent-measurements.use-case.ts
│   │   │   │   └── detect-anomalies.use-case.ts
│   │   │   │
│   │   │   ├── adapters/
│   │   │   │   ├── measurement.repository.ts
│   │   │   │   ├── measurement.prisma-repository.ts
│   │   │   │   └── measurement.dto.ts
│   │   │   │
│   │   │   ├── event-handlers/
│   │   │   │   └── measurement-critical.event-handler.ts  # 🔗 Lê MeasurementCriticalEvent
│   │   │   │
│   │   │   └── errors/
│   │   │       ├── measurement-not-found.error.ts
│   │   │       ├── invalid-metrics.error.ts
│   │   │       └── device-not-recording.error.ts
│   │   │
│   │   └── notification/                 📦 Agregado: Notification
│   │       ├── notification.module.ts
│   │       ├── notification.controller.ts
│   │       ├── notification.service.ts
│   │       │
│   │       ├── domain/
│   │       │   ├── notification.aggregate.ts
│   │       │   ├── notification.events.ts     # NotificationCreated, NotificationSent, NotificationRead
│   │       │   └── notification.specifications.ts # PendingNotifications, NotificationsByCaregiver
│   │       │
│   │       ├── value-objects/
│   │       │   ├── alert-type.vo.ts           # URGENCY, FALL, LOW_SPO2, HIGH_BPM
│   │       │   ├── alert-channel.vo.ts        # DASHBOARD, EMAIL, WHATSAPP
│   │       │   ├── alert-status.vo.ts         # PENDING, SENT, READ, ACKNOWLEDGED
│   │       │   └── notification-metadata.vo.ts
│   │       │
│   │       ├── application/
│   │       │   ├── create-notification.use-case.ts
│   │       │   ├── send-notification.use-case.ts
│   │       │   ├── mark-as-read.use-case.ts
│   │       │   └── get-pending-notifications.use-case.ts
│   │       │
│   │       ├── domain-services/
│   │       │   └── notification-dispatcher.domain-service.ts  # Multi-channel dispatch
│   │       │
│   │       ├── adapters/
│   │       │   ├── notification.repository.ts
│   │       │   ├── notification.prisma-repository.ts
│   │       │   └── notification.dto.ts
│   │       │
│   │       ├── event-handlers/
│   │       │   ├── measurement-critical.event-handler.ts    # 🔗 Cria notificação
│   │       │   └── subscription-expired.event-handler.ts    # 🔗 Notifica vencimento
│   │       │
│   │       └── errors/
│   │           ├── notification-not-found.error.ts
│   │           ├── invalid-channel.error.ts
│   │           └── caregiver-not-found.error.ts
│   │
│   ├── shared/                           🔗 CONTEXTO: Infraestrutura Compartilhada
│   │   ├── shared.module.ts
│   │   │
│   │   ├── domain/                       DDD Primitives
│   │   │   ├── base.aggregate.ts
│   │   │   ├── base.entity.ts
│   │   │   ├── value-object.ts
│   │   │   ├── specification.interface.ts
│   │   │   └── domain-event.interface.ts
│   │   │
│   │   ├── infrastructure/
│   │   │   ├── anti-corruption/          🆕 Abstrair Integrações Externas
│   │   │   │   ├── payment-provider.interface.ts
│   │   │   │   ├── notification-provider.interface.ts
│   │   │   │   ├── health-device-provider.interface.ts
│   │   │   │   │
│   │   │   │   └── adapters/
│   │   │   │       ├── stripe.adapter.ts             # Implementação Stripe
│   │   │   │       ├── twilio.adapter.ts             # Implementação Twilio
│   │   │   │       ├── sendgrid.adapter.ts           # Implementação SendGrid
│   │   │   │       └── health-device.adapter.ts
│   │   │   │
│   │   │   ├── persistence/
│   │   │   │   ├── repository.interface.ts
│   │   │   │   ├── unit-of-work.interface.ts
│   │   │   │   │
│   │   │   │   └── prisma/
│   │   │   │       ├── prisma.service.ts
│   │   │   │       ├── base.prisma-repository.ts
│   │   │   │       └── extensions/
│   │   │   │
│   │   │   ├── cache/
│   │   │   │   ├── cache.service.interface.ts
│   │   │   │   └── redis.service.ts
│   │   │   │
│   │   │   └── messaging/
│   │   │       ├── event-bus.ts
│   │   │       ├── message-queue.service.ts
│   │   │       ├── event-store.ts            🆕 Event sourcing
│   │   │       └── saga-bus.ts
│   │   │
│   │   ├── exceptions/
│   │   │   ├── domain.exception.ts
│   │   │   ├── application.exception.ts
│   │   │   ├── infrastructure.exception.ts
│   │   │   └── prisma-error.filter.ts
│   │   │
│   │   ├── filters/
│   │   │   ├── exception.filter.ts
│   │   │   └── validation.error.filter.ts
│   │   │
│   │   ├── pipes/
│   │   │   ├── parse-uuid.pipe.ts
│   │   │   └── validation.pipe.ts
│   │   │
│   │   └── utils/
│   │       ├── logger.service.ts
│   │       ├── pagination.ts
│   │       ├── transformer.ts
│   │       └── date-helpers.ts
│   │
│   ├── prisma/                           Database Abstraction
│   │   ├── prisma.module.ts
│   │   ├── prisma.service.ts
│   │   └── extensions/
│   │
│   └── redis/                            Cache & Queue
│       ├── redis.module.ts
│       └── redis.service.ts
│
└── test/                                 🧪 Testes
    ├── e2e/                              End-to-End (por contexto)
    │   ├── business/
    │   │   ├── company.e2e-spec.ts
    │   │   ├── company-with-users.e2e-spec.ts
    │   │   ├── device-elderly.e2e-spec.ts
    │   │   └── elderly-profile.e2e-spec.ts
    │   │
    │   ├── system/
    │   │   ├── plan.e2e-spec.ts
    │   │   └── subscription-lifecycle.e2e-spec.ts
    │   │
    │   ├── iam/
    │   │   ├── auth-login.e2e-spec.ts
    │   │   ├── auth-refresh.e2e-spec.ts
    │   │   ├── rbac-role-based.e2e-spec.ts
    │   │   ├── rbac-company-isolation.e2e-spec.ts
    │   │   └── multi-tenant-isolation.e2e-spec.ts
    │   │
    │   └── monitoring/
    │       ├── measurement-recording.e2e-spec.ts
    │       ├── notification-triggered.e2e-spec.ts
    │       └── event-driven-flow.e2e-spec.ts
    │
    ├── unit/                             Unit (por agregado)
    │   ├── business/
    │   │   ├── company/
    │   │   │   ├── company.aggregate.spec.ts
    │   │   │   ├── company.service.spec.ts
    │   │   │   ├── value-objects/
    │   │   │   │   ├── company-slug.spec.ts
    │   │   │   │   └── company-status.spec.ts
    │   │   │   └── company.repository.spec.ts
    │   │   │
    │   │   ├── user/
    │   │   │   ├── user.aggregate.spec.ts
    │   │   │   ├── value-objects/
    │   │   │   │   ├── user-role.spec.ts
    │   │   │   │   └── user-email.spec.ts
    │   │   │   └── user.repository.spec.ts
    │   │   │
    │   │   ├── elderly/
    │   │   │   ├── elderly.aggregate.spec.ts
    │   │   │   ├── value-objects/
    │   │   │   │   ├── personal-info.spec.ts
    │   │   │   │   └── health-condition.spec.ts
    │   │   │   └── elderly.repository.spec.ts
    │   │   │
    │   │   └── device/
    │   │       ├── device.aggregate.spec.ts
    │   │       ├── value-objects/
    │   │       │   ├── device-spec.spec.ts
    │   │   │   └── device-status.spec.ts
    │   │       └── device.repository.spec.ts
    │   │
    │   ├── system/
    │   │   ├── plan/
    │   │   │   ├── plan.aggregate.spec.ts
    │   │   │   ├── value-objects/
    │   │   │   │   └── price.spec.ts
    │   │   │   └── plan.service.spec.ts
    │   │   │
    │   │   └── subscription/
    │   │       ├── subscription.aggregate.spec.ts
    │   │       ├── value-objects/
    │   │       │   ├── subscription-status.spec.ts
    │   │       │   └── payment-reference.spec.ts
    │   │       ├── subscription.service.spec.ts
    │   │       └── subscription-renewal.saga.spec.ts
    │   │
    │   └── monitoring/
    │       ├── measurement/
    │       │   ├── measurement.aggregate.spec.ts
    │       │   ├── value-objects/
    │   │       │   ├── health-metrics.spec.ts
    │   │       │   └── measurement-timestamp.spec.ts
    │       │   └── measurement.repository.spec.ts
    │       │
    │       └── notification/
    │           ├── notification.aggregate.spec.ts
    │           ├── value-objects/
    │           │   ├── alert-type.spec.ts
    │           │   └── alert-channel.spec.ts
    │           ├── notification.service.spec.ts
    │           └── notification-dispatcher.domain-service.spec.ts
    │
    ├── shared/
    │   ├── domain/
    │   │   ├── base.aggregate.spec.ts
    │   │   └── specification.spec.ts
    │   │
    │   └── infrastructure/
    │       ├── payment-provider.mock.ts
    │       ├── notification-provider.mock.ts
    │       └── event-bus.mock.ts
    │
    └── utils/
        ├── context.ts
        ├── factories/
        │   ├── company.factory.ts
        │   ├── user.factory.ts
        │   ├── elderly.factory.ts
        │   ├── device.factory.ts
        │   ├── measurement.factory.ts
        │   ├── notification.factory.ts
        │   └── subscription.factory.ts
        │
        └── fixtures/
            ├── companies.fixture.ts
            ├── users.fixture.ts
            └── subscriptions.fixture.ts

``