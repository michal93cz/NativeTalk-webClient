export class Notice {
  _id: number;

  constructor(
    _id?: number,
    title?: string,
    description?: string,
    language?: string,
    city?: string,
    owner?: {
      _id: string,
      name: string,
      average_opinion: number
    },
    date?: string,
    interested_users?: [ string ],
    selected_user?: string,
    created_at?: string,
    district?: string,
    country?: string
  ) {  }
}
