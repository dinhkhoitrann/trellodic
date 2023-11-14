export interface Notification {
  readonly _id: string;
  triggeredBy: string;
  activity: string;
  createdOn: string;
  isRead: boolean;
}
