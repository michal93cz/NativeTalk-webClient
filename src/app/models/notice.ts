export class Notice {
  _id: number;
  title: string;
  description: string;
  language: string;
  city: string;
  district: string;
  country: string;
  date: string;
  owner: string;
  interested_users: [ string ];
  selected_user: string;
  created_at: string;
}
