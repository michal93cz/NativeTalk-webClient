export class Notice {
  _id: string;
  title: string;
  description: string;
  language: string;
  city: string;
  type: string;
  owner: {
    _id: string;
    name: string;
    average_opinion: number
  };
  date: string;
  interested_users: [ string ];
  selected_user: string;
  created_at: string;

  constructor(
    _id?: string,
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
    created_at?: string
  ) {  }
}
