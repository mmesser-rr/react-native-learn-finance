export interface ICreateEventStatus {
  athleteId: string;
  eventItemId: string;
};

export interface IUpdateEventStatusById {
  id: string;
  registered: boolean;
};