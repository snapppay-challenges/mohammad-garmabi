interface IPassengerRequestAction {
  where: Partial<Record<'phone' | 'first_name', string>>;
  sort: 'createdAt DESC';
  limit: number;
  offset: number;
}

interface IPassengerByIdRequestAction {
  passengerId: string;
}

export type { IPassengerRequestAction, IPassengerByIdRequestAction };
