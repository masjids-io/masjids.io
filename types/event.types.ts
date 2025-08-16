export interface EventType {
  id: string;
  masjidId: string;
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  requiresRsvp: boolean;
  maxParticipants: number;
  livestreamLink: string | null;
  createTime: string;
  updateTime: string;
}