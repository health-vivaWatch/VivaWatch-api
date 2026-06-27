import { pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', [
  'SYSTEM_ADMIN',
  'COMPANY_ADMIN',
  'COMPANY_OWNER',
  'CAREGIVER',
]);

export const deviceStatusEnum = pgEnum('device_status', [
  'ACTIVE',
  'INACTIVE',
  'MAINTENANCE',
  'DECOMMISSIONED',
  'ERROR',
  'LOW_BATTERY',
  'DISCONNECTED',
]);

export const pairingStatusEnum = pgEnum('pairing_status', [
  'WAITING_CONNECTION',
  'CONNECTED',
  'CONNECTION_FAILED',
  'LOST_CONNECTION',
]);

export const devicePairingCodeStatusEnum = pgEnum(
  'device_pairing_code_status',
  ['PENDING', 'USED', 'EXPIRED'],
);

export const activityLevelEnum = pgEnum('activity_level', [
  'RESTING',
  'WALKING',
  'RUNNING',
  'SLEEPING',
]);

export const notificationTypeEnum = pgEnum('notification_type', [
  'URGENCY',
  'ATTENTION',
  'FALL',
  'LOW_SPO2',
  'HIGH_BPM',
  'GENERIC',
]);

export const notificationStatusEnum = pgEnum('notification_status', [
  'PENDING',
  'SENT',
  'READ',
]);

export const notificationChannelEnum = pgEnum('notification_channel', [
  'DASHBOARD',
  'EMAIL',
  'WHATSAPP',
]);

export const planIntervalEnum = pgEnum('plan_interval', [
  'DAILY',
  'WEEKLY',
  'MONTHLY',
  'YEARLY',
]);

export const subscriptionStatusEnum = pgEnum('subscription_status', [
  'ACTIVE',
  'INACTIVE',
  'CANCELED',
  'PENDING_CANCELATION',
  'EXPIRED',
  'TRIALING',
  'PAST_DUE',
  'UNPAID',
]);

export const subscriptionPaymentStatusEnum = pgEnum(
  'subscription_payment_status',
  [
    'REQUIRES_PAYMENT_METHOD',
    'REQUIRES_CONFIRMATION',
    'REQUIRES_ACTION',
    'PROCESSING',
    'SUCCEEDED',
    'FAILED',
    'CANCELED',
  ],
);

export const paymentMethodEnum = pgEnum('payment_method', ['CARD', 'PIX']);
